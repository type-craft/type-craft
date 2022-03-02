import { ScFile, ScNodeType } from "@source-craft/types";
import { uniq, flattenDeep, flatten, upperFirst, camelCase } from "lodash-es";
import {
  getAllChildrenTypes,
  Vocabulary,
  TypeDefinition,
  FieldDefinition,
} from "@type-craft/vocabulary";

import {
  VocabularyTypescriptGenerators,
  TypescriptTypeGenerator,
} from "./types";

export function generateTsTypesFile(
  vocabulary: Vocabulary,
  typeGenerators: VocabularyTypescriptGenerators,
  types: string[]
): ScFile {
  const allChildrenTypeNames = uniq(
    flattenDeep(types.map((t) => getAllChildrenTypes(vocabulary, t)))
  ).reverse();

  const generators = allChildrenTypeNames.map((t) => {
    let g = typeGenerators[t];
    if (!g)
      g = defaultGenerator(
        typeGenerators,
        vocabulary[t].name,
        vocabulary[t].fields || []
      );
    return g;
  });
  const allImports = generators.map((g) => g.imports);
  const importDeclarations = flatten(allImports).map(
    (i) => i.importDeclaration
  );

  const allDefineTypes = generators.map((g) => g.defineType).join("\n\n");

  return {
    type: ScNodeType.File,
    content: `${importDeclarations.join("\n")}

${allDefineTypes}`,
  };
}

export function defaultGenerator(
  typeGeneratorsVocabulary: VocabularyTypescriptGenerators,
  name: string,
  fields: Array<FieldDefinition<any>>
): TypescriptTypeGenerator {
  return {
    imports: [],
    defineType: defaultDefineType(typeGeneratorsVocabulary, name, fields),
    referenceType: upperFirst(camelCase(name)),
  };
}

export function defaultDefineType(
  typeGeneratorsVocabulary: VocabularyTypescriptGenerators,
  name: string,
  fields: Array<FieldDefinition<any>>
): string {
  return `export interface ${upperFirst(camelCase(name))} {
  ${
    fields
      ? fields
          .map(
            (f) =>
              `${camelCase(f.name)}: ${
                typeGeneratorsVocabulary[f.type].referenceType
              };`
          )
          .join("\n  ")
      : ""
  }
}`;
}
