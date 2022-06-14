import { findFilesByExtension, ScDirectory } from "@source-craft/types";

export function replaceFunctionBody(
  crate: ScDirectory,
  fnName: string,
  newBody: string
): ScDirectory {
  const files = findFilesByExtension(crate, "rs");

  const regex = new RegExp(
    `fn (${fnName})\\(((?:\\w+: [a-zA-Z0-9_()]+[\\,\\w+: \\w+]*)?)\\)((?:(?: )?(?:\\-\\> [^{}]+)?(?: )?)?)\\{[^{}]*(?:\\{[^{}]*(?:\\{[^{}]*(?:\\{[^{}]*[^{}]*(?:\\{[^{}]*[^{}]*(?:\\{[^{}]*\\})*[^{}]*\\})*[^{}]*\\})*[^{}]*\\})*[^{}]*\\})*[^{}]*\\}`,
    "gm"
  );

  for (const file of files) {
    file.content = file.content.replace(
      regex,
      `fn $1($2)$3{
  ${newBody}
}`
    );
  }

  return crate;
}
