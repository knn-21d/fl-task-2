export type FindIndexesReturnType = { start: number; end: number };

/**
 * @description ищет индексы по которым встречается искомая строка
 * @param searchSubstring - искомая строка
 * @param targetString - строка в которой происходит поиск
 * @returns - массив индексов найденной строки
 */
export function findIndexes(
  searchSubstring: string,
  targetString: string,
): FindIndexesReturnType[] {
  const results: FindIndexesReturnType[] = [];
  for (let i = 0; i < targetString.length; i++) {
    if (targetString.slice(i, i + searchSubstring.length) === searchSubstring) {
      results.push({ start: i, end: i + searchSubstring.length });
    }
  }
  return results;
}

export function uuidv4() {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16),
  );
}
