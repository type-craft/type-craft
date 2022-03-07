import { TypeDefinition } from "@type-craft/vocabulary";
import { TypeElementsImportDeclarations } from "@type-craft/web-components";
import { ContentConfig } from "./config";
export * from "./generators";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const contentType: TypeDefinition<string, ContentConfig> = {
  name: "Content",
  description: "",

  sample: () => lorem.generateSentences(3),
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
