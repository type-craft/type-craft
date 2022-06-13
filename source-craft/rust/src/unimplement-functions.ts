import {
  findFilesByExtension,
  ScDirectory,
} from "@source-craft/types";

export function unimplementFunctions(
  crate: ScDirectory,
  fnNames: string[]
): ScDirectory {
  const files = findFilesByExtension(crate, "rs");

  const namesJoin = fnNames.reduce((acc, next) => `${acc}|${next}`, "");

  const regex = new RegExp(
    `fn (${namesJoin})\\(((?:\\w+: [a-zA-Z0-9_()]+[\\,\\w+: \\w+]*)?)\\)((?:(?: )?(?:\\-\\> \\w+)?(?: )?)?)\\{[^{}]*(?:\\{[^{}]*(?:\\{[^{}]*(?:\\{[^{}]*[^{}]*(?:\\{[^{}]*[^{}]*(?:\\{[^{}]*\\})*[^{}]*\\})*[^{}]*\\})*[^{}]*\\})*[^{}]*\\})*[^{}]*\\}`,
    "gm"
  );

  for (const file of files) {
    file.content = file.content.replace(
      regex,
      `fn $1($2)$3{
  unimplemented!()
}`
    );
  }

  return crate;
}
