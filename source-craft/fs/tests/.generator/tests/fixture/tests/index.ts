import { ScNodeType, ScDirectory } from '@source-craft/types'; 

import { indexTs } from './indexTs';  

export default ({Pictionary}: {Pictionary: string;}): ScDirectory => ({
  type: ScNodeType.Directory,
  children: {
  'index.ts': indexTs({Pictionary})
  }
})