export type CreateElement<T, C> = {
  [key in keyof C]: C[key];
} & {
  get value(): T;
};

export type DetailElement<T, C> = {
  [key in keyof C]: C[key];
} & {
  value: T;
};
