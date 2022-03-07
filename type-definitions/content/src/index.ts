import { TypeDefinition } from "@type-craft/vocabulary";
import { TypeElementsImportDeclarations } from "@type-craft/web-components";
import { ContentConfig } from "./config";
export * from "./generators";
import jeffsum from "jeffsum";

export const contentType: TypeDefinition<string, ContentConfig> = {
  name: "Content",
  description: "",

  sample: () => jeffsum(3, "sentences"),
  configurationSchema: {
    properties: {
      label: {
        description: "Label for the textarea",
        type: "string",
        default: "Content",
      },
    },
  },
};

export const elementImports: TypeElementsImportDeclarations = {
  create: {
    sideEffectImport: {
      importDeclaration: `import '@type-craft/content/create-content';`,
      packageName: "@type-craft/content",
      version: "^0.0.7",
    },
    tagName: "create-content",
  },
  detail: {
    sideEffectImport: {
      importDeclaration: `import '@type-craft/content/content-detail';`,
      packageName: "@type-craft/content",
      version: "^0.0.7",
    },
    tagName: "content-detail",
  },
};
