import { TypeDefinition } from "@type-craft/vocabulary";
import { TypeElementsImportDeclarations } from "@type-craft/web-components";
export * from "./generators";

export const contentType: TypeDefinition<string, void> = {
  name: "Content",
  description: "",

  sample: () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Maecenas aliquam, elit ac interdum gravida, leo odio accumsan augue, ut 
vehicula ex elit vel est. Phasellus rutrum tortor a nunc euismod malesuada.
Suspendisse potenti. Nulla aliquet, eros vitae feugiat vehicula, nibh odio mattis 
purus, ac interdum augue risus non justo. Maecenas sed volutpat urna. Aenean nec 
ante tellus. Mauris in urna ac lorem bibendum egestas tincidunt nec odio. Donec
sit amet elit nisl. Integer eleifend non ipsum rutrum viverra. Phasellus faucibus
arcu id dolor elementum volutpat. Donec tincidunt finibus nunc, et elementum erat
pellentesque id. Nam dictum rutrum pellentesque. Phasellus sollicitudin lectus
vitae lobortis elementum. Donec vestibulum quam eget accumsan hendrerit.`,
};

export const elementImports: TypeElementsImportDeclarations = {
  create: {
    sideEffectImport: {
      importDeclaration: `import '@type-craft/content/create-content';`,
      packageName: "@type-craft/content",
      version: "^0.0.3",
    },
    tagName: "create-content",
  },
  detail: {
    sideEffectImport: {
      importDeclaration: `import '@type-craft/content/content-detail';`,
      packageName: "@type-craft/content",
      version: "^0.0.3",
    },
    tagName: "content-detail",
  },
};
