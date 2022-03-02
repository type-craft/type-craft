import { TypeDefinition } from "@type-craft/vocabulary";
import { TypeElementsImportDeclarations } from "@type-craft/web-components";
import { importDeclaration } from "@source-craft/npm";
export * from "./generators";

export const titleType: TypeDefinition<string, {}> = {
  name: "Title",
  description: "Title of the object",

  sample: () => "An amazing dinner",
};

export const elementImports: TypeElementsImportDeclarations = {
  create: {
    sideEffectImport: {
      importDeclaration: importDeclaration(
        `import '@type-craft/title/create-title'`
      ),
      packageName: "@type-craft/title",
      version: "^0.0.3",
    },
    tagName: "create-title",
  },
  detail: {
    sideEffectImport: {
      importDeclaration: importDeclaration(
        `import '@type-craft/title/title-detail'`
      ),
      packageName: "@type-craft/title",
      version: "^0.0.3",
    },
    tagName: "title-detail",
  },
};
