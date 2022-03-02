import { TypeDefinition } from "@type-craft/vocabulary";
import { TypeElementsImportDeclarations } from "@type-craft/web-components";
import { DateTimeConfig } from "./types";
export * from "./generators";

export const dateTimeType: TypeDefinition<number, DateTimeConfig> = {
  name: "Date and Time",
  description: "A point in time",

  configurationSchema: {
    properties: {
      relativeTime: {
        description: "Display in relative time",
        type: "boolean",
        default: false,
      },
    },
  },
  sample: () => Date.now(),
};

export const elementImports: TypeElementsImportDeclarations = {
  create: {
    sideEffectImport: {
      importDeclaration: `import '@type-craft/date-time/create-date-time';`,
      packageName: "@type-craft/date-time",
      version: "0.0.4",
    },
    tagName: "create-date-time",
  },
  detail: {
    sideEffectImport: {
      importDeclaration: `import '@type-craft/date-time/date-time-detail';`,
      packageName: "@type-craft/date-time",
      version: "0.0.4",
    },
    tagName: "date-time-detail",
  },
};
