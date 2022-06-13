import { ScDirectory, ScFile, ScNode, ScNodeType } from "./types";

export function findByPath(dir: ScDirectory, path: string): ScNode | undefined {
  const components = path.split("/");

  let currentDir: ScNode = dir;

  for (const component of components) {
    if (!currentDir || currentDir.type === ScNodeType.File) return undefined;
    currentDir = currentDir.children[component];
  }

  return currentDir;
}

export function findFilesByExtension(
  dir: ScDirectory,
  extension: string
): ScFile[] {
  return findFiles(dir, (name, file) => name.endsWith(`.${extension}`));
}

export function findFiles(
  dir: ScDirectory,
  predicate: (name: string, file: ScFile) => boolean
): ScFile[] {
  let files: ScFile[] = [];

  for (const [name, child] of Object.entries(dir.children)) {
    if (child.type === ScNodeType.Directory) {
      files = [...files, ...findFiles(child, predicate)];
    } else {
      if (predicate(name, child)) {
        files.push(child);
      }
    }
  }

  return files;
}
