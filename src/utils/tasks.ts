import { GenerateNode } from '../model/generate-node';
import { Grammar } from '../shared/types/grammar';
import { getMaxLength } from './grammar';
import { findAll } from './tree';

const grammar: Grammar = {
  startingSymbol: 'S',
  nonTerminalSymbols: ['S', 'A'],
  terminalSymbols: ['0', '1'],
  rules: [
    {
      left: 'S',
      right: ['0', '1', '1A'],
    },
    {
      left: 'A',
      right: ['0', '1', '0A', '1A'],
    },
  ],
};

export function generateUniqueChains(
  grammar: Grammar,
  targetLength: number,
): string[] {
  const maxLength = getMaxLength(targetLength, grammar.rules);
  const startNode = new GenerateNode(
    grammar.startingSymbol,
    grammar,
    targetLength,
    maxLength,
    -1,
    null,
    null,
    null,
  );
  const chains = startNode.getChains();
  return chains.length ? chains : ['Таких слов не существует'];
}

export function findWord(grammar: Grammar, targetChain: string) {
  const targetWord = ['𝜀', ...Array.from(targetChain).join('𝜀'), '𝜀'].join('')
  const targetLength = targetWord.replaceAll('𝜀', '').length;
  const maxLength = getMaxLength(targetLength, grammar.rules);
  const startNode = new GenerateNode(
    grammar.startingSymbol,
    grammar,
    targetLength,
    maxLength,
    -1,
    null,
    null,
    null,
  );
  const foundNodes = findAll(
    'currentChain',
    targetWord,
    'nextNodes',
    [startNode],
    (a, b) => a.replaceAll('𝜀', '') === b.replaceAll('𝜀', ''),
  );
  return foundNodes;
}

export function getAWayToString(targetChain: string, grammar: Grammar) {
  const foundNodes = findWord(grammar, targetChain);
  const paths = foundNodes.map((it) => {
    const codePaths: number[] = [];
    const chainPaths: string[] = [];
    let node: GenerateNode | null = it;
    while (node) {
      codePaths.push(node.code);
      chainPaths.push(node.currentChain);
      node = node.parentNode;
    }
    return { codePaths, chainPaths };
  });
  return paths.map((it) => ({
    chainPaths: it.chainPaths.reverse(),
    codePaths: it.codePaths.filter((it) => it !== -1).reverse(),
  }));
}
