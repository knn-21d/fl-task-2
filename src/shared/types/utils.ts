export type ArrayKeys<T> = {
  [K in keyof T]: T[K] extends (infer U)[] | readonly (infer U)[] ? K : never;
}[keyof T];
