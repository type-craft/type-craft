import { ScNodeType, ScDirectory } from '@source-craft/types'; 

import { gitignore } from './gitignore';
import { packageJson } from './packageJson';
import src from './src';
import tests from './tests';
import { tsconfigJson } from './tsconfigJson';  

export default ({Pictionary}: {Pictionary: string;}): ScDirectory => ({
  type: ScNodeType.Directory,
  children: {
  '.gitignore': gitignore(),
  'package.json': packageJson(),
  'src': src(),
  'tests': tests({Pictionary}),
  'tsconfig.json': tsconfigJson()
  }
})