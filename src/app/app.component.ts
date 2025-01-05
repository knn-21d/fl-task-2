import { Component, signal } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Grammar, Rule } from '../shared/types/grammar';
import {
  findWord,
  generateUniqueChains,
  getAWayToString,
} from '../utils/tasks';
import { TreantComponent } from '../components/treant/treant.component';
import { GenerateNode } from '../model/generate-node';
import { uuidv4 } from '../utils/string';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, TreantComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private grammar: Grammar | null = null;

  protected readonly grammarGroup = new FormGroup({
    startingSymbol: new FormControl<string>('S', { nonNullable: true }),
    terminalSymbols: new FormControl<string>('0 1', { nonNullable: true }),
    nonTerminalSymbols: new FormControl<string>('S A', { nonNullable: true }),
    rules: new FormControl<string>(`S->0,1,1A\nA->0,1,0A,1A`, {
      nonNullable: true,
    }),
  });

  protected readonly lengthControl = new FormControl<number>(2, {
    nonNullable: true,
  });

  protected readonly pathsToString = signal<ReturnType<
    typeof getAWayToString
  > | null>(null);

  protected readonly uniqueChains = signal<string[]>([]);

  protected readonly xChainControl = new FormControl<string>('', {
    nonNullable: true,
  });

  protected readonly downTreeChartConfig = signal<string | null>(null);

  protected readonly upTreeChartConfig = signal<string | null>(null);

  protected readonly treeChartWord = signal<string>('');

  protected showUniqueChainsHandler() {
    if (this.grammar) {
      this.uniqueChains.set(
        generateUniqueChains(this.grammar, this.lengthControl.value),
      );
    }
  }

  protected getPathsToStringHandler() {
    if (this.grammar) {
      this.pathsToString.set(
        getAWayToString(this.xChainControl.value, this.grammar),
      );
    }
  }

  protected saveGrammarHandler() {
    this.grammar = {
      nonTerminalSymbols:
        this.grammarGroup.controls.nonTerminalSymbols.value.split(' '),
      startingSymbol: this.grammarGroup.controls.startingSymbol.value,
      terminalSymbols:
        this.grammarGroup.controls.terminalSymbols.value.split(' '),
      rules: this.grammarGroup.controls.rules.value.split('\n').map((it) => {
        const [left, right] = it.split('->');
        return {
          left: left.trim(),
          right: right
            .trim()
            .split(',')
            .map((rightRule) => rightRule.trim()),
        };
      }),
    } satisfies Grammar;
  }

  protected createCharts() {
    if (this.grammar) {
      const word = this.treeChartWord();
      const foundNodes = findWord(this.grammar, word);
      const node = foundNodes[0];
      if (node) {
        let currentNode: GenerateNode | null = node;
        const nodePath: GenerateNode[] = [];
        while (currentNode) {
          nodePath.push(currentNode);
          currentNode = currentNode.parentNode;
        }
        this.createDownChart([...nodePath]);
        this.createUpChart([...nodePath]);
      }
    }
  }

  private createUpChart(nodePath: GenerateNode[]) {
    const graphNodes = nodePath.map((it, i) => ({
      level: i,
      chars: Array.from(it.currentChain).map((char) => ({
        char,
        id: uuidv4(),
        level: i,
      })),
      prevNodeRuleLinks: it.currentChain,
      code: it.code,
      rule: it.rule,
      replaced: it.changedPrevPath,
    }));
    const chartNodes = graphNodes.map((it) => {
      const chars = it.chars.map((char) => ({
        chartConfig: `${char.level + char.id}["${char.char}"]`,
        id: `${char.level + char.id}["${char.char}"]`,
        original: it,
      }));
      return { chars, original: it };
    });
    for (let i = 0; i < chartNodes.length; i++) {
      const chartNode = chartNodes[i];
      const prevNode = chartNodes[i - 1];
      chartNode.chars.forEach((it, j) => {
        if (
          !chartNode ||
          !prevNode?.original.replaced ||
          !prevNode?.original.rule
        ) {
          return;
        }
        if (
          j >= prevNode.original.replaced.start &&
          j <
            prevNode.original.replaced.start +
              Array.from(prevNode.original.rule.right[0]).length
        ) {
          it.chartConfig = prevNode.chars
            .slice(
              prevNode.original.replaced.start,
              prevNode.original.replaced.start +
                Array.from(prevNode.original.rule.right[0]).length,
            )
            .map(
              (prev) =>
                prev.id + ' -- ' + prevNode.original.code + ' --> ' + it.id,
            )
            .join(`\n`);
        } else if (j < prevNode.original.replaced.start) {
          it.chartConfig = prevNode.chars[j].id + ' --> ' + it.id;
        } else {
          it.chartConfig =
            prevNode.chars[
              j -
                (Array.from(prevNode.original.rule.left).length -
                  Array.from(prevNode.original.rule.right[0]).length)
            ].id +
            ' --> ' +
            it.id;
        }
        return;
      });
    }
    const config =
      `flowchart TD\n` +
      chartNodes
        .map((chNode) =>
          chNode.chars.map((char) => char.chartConfig.split('\n')),
        )
        .flat(5)
        .map((it) => `  ${it}\n`)
        .join('');
    this.upTreeChartConfig.set(config);
  }

  private createDownChart(nodePath: GenerateNode[]) {
    nodePath.reverse();
    const graphNodes = nodePath.map((it, i) => ({
      level: i,
      chars: Array.from(it.currentChain).map((char) => ({
        char,
        id: uuidv4(),
        level: i,
      })),
      prevNodeRuleLinks: it.currentChain,
      code: it.code,
      rule: it.rule,
      replaced: it.changedPrevPath,
    }));
    const chartNodes = graphNodes.map((it) => {
      const chars = it.chars.map((char) => ({
        chartConfig: `${char.level + char.id}["${char.char}"]`,
        id: `${char.level + char.id}["${char.char}"]`,
        original: it,
      }));
      return { chars, original: it };
    });
    for (let i = 0; i < chartNodes.length; i++) {
      const chartNode = chartNodes[i];
      const prevNode = chartNodes[i - 1];
      chartNode.chars.forEach((it, j) => {
        if (
          !prevNode ||
          !chartNode.original.replaced ||
          !chartNode.original.rule
        ) {
          return;
        }
        if (
          j >= chartNode.original.replaced.start &&
          j <
            chartNode.original.replaced.start +
              Array.from(chartNode.original.rule.right[0]).length
        ) {
          it.chartConfig = prevNode.chars
            .slice(
              chartNode.original.replaced.start,
              chartNode.original.replaced.start +
                Array.from(chartNode.original.rule.left).length,
            )
            .map(
              (prev) => prev.id + ' -- ' + it.original.code + ' --> ' + it.id,
            )
            .join(`\n`);
        } else if (j < chartNode.original.replaced.start) {
          it.chartConfig = prevNode.chars[j].id + ' --> ' + it.id;
        } else {
          const targetJ =
            j -
            (chartNode.original.rule.left.length -
              chartNode.original.rule.right[0].length);
          it.chartConfig =
            prevNode.chars[
              targetJ > prevNode.chars.length - 1 ?
                prevNode.chars.length - 1
              : targetJ
            ].id +
            ' --> ' +
            it.id;
        }
        return;
      });
    }
    const config =
      `flowchart TD\n` +
      chartNodes
        .map((chNode) =>
          chNode.chars.map((char) => char.chartConfig.split('\n')),
        )
        .flat(10)
        .map((it) => `  ${it}\n`)
        .join('');
    this.downTreeChartConfig.set(config);
  }
}
