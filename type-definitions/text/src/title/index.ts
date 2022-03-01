import { TypeDefinition } from '@type-craft/vocabulary';
import { TypeElementsImportDeclarations } from '@type-craft/web-components';
import { importDeclaration } from '@source-craft/npm';
export * from './generators';

export const titleType: TypeDefinition<string, {}> = {
  name: 'Title',
  description: 'Title of the object',

  sample: () => 'An amazing dinner',
};

export const elementImports: TypeElementsImportDeclarations = {
  create: {
    sideEffectImport: {
      importDeclaration: importDeclaration('@type-craft/text/create-title'),
      packageName: '@type-craft/text',
      version: '0.0.1',
    },
    tagName: 'create-title',
  },
  detail: {
    sideEffectImport: {
      importDeclaration: importDeclaration('@type-craft/text/title-detail'),
      packageName: '@type-craft/text',
      version: '0.0.1',
    },
    tagName: 'title-detail',
  },
};
