import { uniq } from 'es-toolkit';
import { Grammar, Rule } from '../shared/types/grammar.js';
import { findIndexes, FindIndexesReturnType } from '../utils/string.js';

export class GenerateNode {
  /**
   * @description формальная грамматика
   */
  private readonly grammar: Grammar;

  /**
   * @description граница длины дальше которой не генерируем цепочки,
   * так как нет варианта их заменить в меньшую подходящую длинну
   */
  private maxLength: number;

  /**
   * @description заданная целевая длинна цепочек
   */
  private targetLength: number;

  /**
   * @description текущая цепочка символов
   */
  public readonly currentChain: string;

  /**
   * @description номер использованного правила
   */
  public readonly code: number;

  /**
   * @description родительская нода
   */
  public readonly parentNode: GenerateNode | null;

  /**
   * @description признак отсутствия нетерминальных символов
   */
  public isFinalNode: boolean = false;

  /**
   * @description порождаемые следующие цепочки
   */
  public nextNodes: GenerateNode[] = [];

  public changedPrevPath: FindIndexesReturnType | null = null;

  public readonly rule: Rule | null;

  public constructor(
    currentChain: string,
    grammar: Grammar,
    targetLength: number,
    maxLength: number,
    code: number,
    parentNode: GenerateNode | null,
    rule: Rule | null,
    changedPrevPath: FindIndexesReturnType | null,
  ) {
    this.currentChain = currentChain;
    this.grammar = grammar;
    this.targetLength = targetLength;
    this.maxLength = maxLength;
    this.code = code;
    this.parentNode = parentNode;
    this.rule = rule;
    this.changedPrevPath = changedPrevPath;
    this.generateNextNodes();
  }

  public getChains(): string[] {
    const childChains = this.nextNodes.map((it) => it.getChains());
    return uniq(
      childChains
        .flat()
        .concat(this.isFinalNode ? [this.currentChain] : [])
        .filter((it) => it.replaceAll('𝜀', '').length === this.targetLength),
    );
  }

  private generateNextNodes() {
    if (
      !this.grammar.nonTerminalSymbols.some((it) =>
        this.currentChain.includes(it),
      )
    ) {
      this.nextNodes = [];
      this.isFinalNode = true;
      return;
    }

    const newNodes: GenerateNode[] = [];
    let ruleIndex = 0;
    for (
      let fullRuleIndex = 0;
      fullRuleIndex < this.grammar.rules.length;
      fullRuleIndex++
    ) {
      const rule = this.grammar.rules[fullRuleIndex];
      const ruleIndexes = findIndexes(rule.left, this.currentChain);
      for (let i = 0; i < rule.right.length; i++) {
        const ruleReplace = rule.right[i];
        ruleIndex += 1;
        for (let j = 0; j < ruleIndexes.length; j++) {
          const ruleRight = ruleIndexes[j];
          const newNode =
            this.currentChain.slice(0, ruleRight.start) +
            ruleReplace +
            this.currentChain.slice(ruleRight.end);
          if (newNode.length > this.maxLength) {
            continue;
          }
          newNodes.push(
            new GenerateNode(
              newNode,
              this.grammar,
              this.targetLength,
              this.maxLength,
              ruleIndex,
              this,
              { left: rule.left, right: [rule.right[i]] as string[] },
              ruleRight,
            ),
          );
        }
      }
    }
    this.nextNodes = newNodes;
  }
}
