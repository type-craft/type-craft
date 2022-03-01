import { ScFile, ScNodeType } from '@source-craft/types';
import camelCase from 'lodash-es/camelCase';
import kebabCase from 'lodash-es/kebabCase';
import upperFirst from 'lodash-es/upperFirst';
import snakeCase from 'lodash-es/snakeCase';

export const tsconfigJson = (): ScFile => ({
  type: ScNodeType.File,
  content: `{
  "compilerOptions": {
    "target": "es2015",
    "module": "esnext",
    "sourceMap": true,
    "baseUrl": "src",
    "declaration": true,
    "declarationDir": "dist",
    "incremental": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "outDir": "dist",
    "types": ["node"]
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules/**/*", "dist", "tests"]
}
`
});
    