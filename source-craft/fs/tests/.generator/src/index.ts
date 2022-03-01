import { ScNodeType, ScDirectory } from '@source-craft/types'; 

import { directoryToGeneratorTs } from './directoryToGeneratorTs';
import { indexTs } from './indexTs';
import { readFolderTs } from './readFolderTs';
import { utilsTs } from './utilsTs';
import { writeDirectoryTreeTs } from './writeDirectoryTreeTs';  

export default (): ScDirectory => ({
  type: ScNodeType.Directory,
  children: {
  'directory-to-generator.ts': directoryToGeneratorTs(),
  'index.ts': indexTs(),
  'read-folder.ts': readFolderTs(),
  'utils.ts': utilsTs(),
  'write-directory-tree.ts': writeDirectoryTreeTs()
  }
})