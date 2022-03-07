import { TypeDefinition } from "@type-craft/vocabulary";
import { TypeElementsImportDeclarations } from "@type-craft/web-components";
import { TitleConfig } from "config";
import jeffsum from 'jeffsum'

export * from "./generators";

export const titleType: TypeDefinition<string,TitleConfig> = {
  name: "Title",
  description: "Title of the object",

  sample: () => jeffsum(3, 'words'),
  configurationSchema: {
    properties: {
      label: {
        description: "Label for the field",
        type: "string",
        default: "Title",
      },
    },
  },
};

export const elementImports: TypeElementsImportDeclarations = {
  create: {
    sideEffectImport: {
      importDeclaration: `import '@type-craft/title/create-title';`,
      packageName: "@type-craft/title",
      version: "^0.0.7",
    },
    tagName: "create-title",
  },
  detail: {
    sideEffectImport: {
      importDeclaration: `import '@type-craft/title/title-detail';`,
      packageName: "@type-craft/title",
      version: "^0.0.7",
    },
    tagName: "title-detail",
  },
};
