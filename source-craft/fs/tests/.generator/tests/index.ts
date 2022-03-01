import { ScNodeType, ScDirectory } from '@source-craft/types'; 

import fixture from './fixture';
import { indexTs } from './indexTs';  

export default ({Pictionary}: {Pictionary: string;}): ScDirectory => ({
  type: ScNodeType.Directory,
  children: {
  '.fixture': fixture({Pictionary}),
  'index.ts': indexTs({Pictionary})
  }
})