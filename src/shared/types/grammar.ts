/**
 * @description правила формирования вывода
 */
export type Rule = {
  /**
   * @description заменяемая часть правила
   */
  left: string;
  /**
   * @description варианты на которые можно заменить левую часть правила
   */
  right: string[] | string[][];
};

/**
 * @description формальная грамматика
 */
export type Grammar = {
  /**
   * @description правила замены символов
   */
  rules: Rule[];
  /**
   * @description символ с которого начинается построения вывода/слов/предложений
   */
  startingSymbol: string;
  /**
   * @description символы грамматика, которые используются в итоговых словах, буквы
   */
  terminalSymbols: string[];
  /**
   * @description спецсимволы, которые не должнны оставаться в итоговом выводе, но могут использоваться при его формировании
   */
  nonTerminalSymbols: string[];
};
