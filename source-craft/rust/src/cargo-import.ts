import uniq from "lodash-es/uniq";

export interface CargoImport {
  crateName: string;
  version: string;

  importDeclaration: string;
}

export function generateImports(imports: CargoImport[]): string {
  return uniq(imports.map((cargoImport) => cargoImport.importDeclaration)).join(
    "\n"
  );
}
