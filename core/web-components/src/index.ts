import { NpmImport } from '@source-craft/npm';

export type VocabularyElementsImportDeclarations = Record<string, TypeElementsImportDeclarations>;

export interface CustomElementImport {
  sideEffectImport: NpmImport;
  tagName: string;
}

export interface TypeElementsImportDeclarations {
  create: CustomElementImport;
  detail: CustomElementImport;
}

export function getAllImports(renderersImports: TypeElementsImportDeclarations): NpmImport[] {
  return [renderersImports.create.sideEffectImport, renderersImports.detail.sideEffectImport];
}
