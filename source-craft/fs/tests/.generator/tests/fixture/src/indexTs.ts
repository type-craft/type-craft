import { ScFile, ScNodeType } from '@source-craft/types';
import camelCase from 'lodash-es/camelCase';
import kebabCase from 'lodash-es/kebabCase';
import upperFirst from 'lodash-es/upperFirst';
import snakeCase from 'lodash-es/snakeCase';

export const indexTs = (): ScFile => ({
  type: ScNodeType.File,
  content: `export * from "./read-folder";
export * from "./write-directory-tree";
export * from "./directory-to-generator";
hello`
});
    