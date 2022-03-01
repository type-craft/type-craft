import { ScFile, ScNodeType } from '@source-craft/types';
import camelCase from 'lodash-es/camelCase';
import kebabCase from 'lodash-es/kebabCase';
import upperFirst from 'lodash-es/upperFirst';
import snakeCase from 'lodash-es/snakeCase';

export const packageJson = (): ScFile => ({
  type: ScNodeType.File,
  content: `{
  "name": "@source-craft/fs",
  "version": "0.0.1",
  "description": "Common utilities to manage the filesystem with source-craft's types",
  "author": "guillem.cordoba@gmail.com",
  "main": "dist/index.js",
  "module": "dist/index.js",
  "typings": "dist/index.d.ts",
  "scripts": {
    "start": "tsc -w",
    "build": "tsc",
    "build:watch": "tsc -w --preserveWatchOutput",
    "test": "npm run build && rimraf tests/.fixture tests/.source-craft && node --loader ts-node/esm --experimental-specifier-resolution=node tests/index.ts"
  },
  "dependencies": {
    "@source-craft/types": "0.0.1",
    "ignore": "^5.2.0",
    "lodash-es": "^4.17.21",
    "to-js-identifier": "^1.0.0"
  },
  "devDependencies": {
    "@types/lodash-es": "^4.17.5",
    "@types/node": "^17.0.17",
    "rimraf": "^3.0.2",
    "tape": "^5.5.0",
    "ts-node": "^10.4.0",
    "typescript": "^4.4.3"
  },
  "files": [
    "dist"
  ],
  "type": "module"
}
`
});
    