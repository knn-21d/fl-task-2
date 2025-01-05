import { isArray } from 'es-toolkit/compat';
import { ArrayKeys } from '../shared/types/utils.js';

/**
 *
 * @param key ключ объекта в котором ищется значение в дереве
 * @param value значение, которое ищется в дереве
 * @param childrenKey ключ, с нодами-детьми дерева
 * @param items ноды дерева
 * @returns ноды, в которых нашлось нужное значение
 */
export function findAll<
  T extends unknown = unknown,
  Key extends keyof T = keyof T,
  Value extends T[Key] = T[Key],
  ChildrensKey = ArrayKeys<T>,
>(
  key: Key,
  value: Value,
  childrenKey: ChildrensKey,
  items: T[],
  compareFunc: (value: Value, foundValue: Value) => boolean,
): T[] {
  let i = 0;
  let found: T[] = [];
  let result: T[] = [];

  for (; i < items.length; i++) {
    if (compareFunc(items[i][key] as Value, value)) {
      result.push(items[i]);
    } else if (isArray(items[i][childrenKey as keyof T])) {
      found = findAll(
        key,
        value,
        childrenKey,
        items[i][childrenKey as keyof T] as T[],
        compareFunc,
      );
      if (found.length) {
        result = result.concat(found);
      }
    }
  }

  return result;
}
