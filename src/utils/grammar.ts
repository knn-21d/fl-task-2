import { Rule } from '../shared/types/grammar.js';

/**
 *
 * @param targetlength нужная длинна цепочки
 * @param rules правила грамматики
 * @returns максимальная длинна, больше которой нельзя получить целевую длинну после дополнительных замен правилами
 */
export function getMaxLength(targetlength: number, rules: Rule[]): number {
  return (
    targetlength * targetlength
  );
}
