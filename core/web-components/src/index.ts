import { NpmImport } from "@source-craft/npm";

export type VocabularyElementsImportDeclarations = Record<
  string,
  TypeElementsImportDeclarations
>;

export interface CustomElementImport {
  sideEffectImport: NpmImport;
  tagName: string;
}

export interface TypeElementsImportDeclarations {
  create?: CustomElementImport;
  detail?: CustomElementImport;
}

export function getAllImports(
  renderersImports: TypeElementsImportDeclarations
): NpmImport[] {
  const imports = [];

  if (renderersImports.create)
    imports.push(renderersImports.create.sideEffectImport);
  if (renderersImports.detail)
    imports.push(renderersImports.detail.sideEffectImport);

  return imports;
}
