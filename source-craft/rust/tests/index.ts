import test from "tape";
import { replaceFunctionBody } from "../dist";
import path from "path";
import { ScDirectory, findByPath, ScFile } from "@source-craft/types";
import { readFolder } from "@source-craft/fs";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test("unimplement some_func from sample crate", async (t) => {
  const d = readFolder(`${__dirname}/sample`);

  const crate = replaceFunctionBody(d, "some_func", "unimplemented!()");

  const librs = findByPath(crate, "src/lib.rs") as ScFile;

  t.equal(
    librs.content,
    `

fn main() {
  let x = some_func();
}


fn some_func() -> Option<usize> {
  unimplemented!()
}`
  );
});
