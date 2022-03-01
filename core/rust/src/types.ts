import { CargoImport } from "@source-craft/rust";

export type VocabularyRustGenerators = Record<string, RustTypeGenerator>;

export interface RustTypeGenerator {
  imports: CargoImport[];
  defineType: string;
  referenceType: string;
}
