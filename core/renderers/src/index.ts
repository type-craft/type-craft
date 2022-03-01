import { CreateElement, DetailElement } from "@type-craft/vocabulary";

export type VocabularyRenderers = Record<string, TypeRenderers<any, any>>;

export type Constructor<T> = new (...args: any[]) => T;

export interface TypeRenderers<T, C> {
  create: Constructor<HTMLElement & CreateElement<T, C>>;
  detail: Constructor<HTMLElement & DetailElement<T, C>>;
}
