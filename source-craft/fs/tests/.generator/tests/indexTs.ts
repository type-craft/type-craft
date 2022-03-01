import { ScFile, ScNodeType } from '@source-craft/types';
import camelCase from 'lodash-es/camelCase';
import kebabCase from 'lodash-es/kebabCase';
import upperFirst from 'lodash-es/upperFirst';
import snakeCase from 'lodash-es/snakeCase';

export const indexTs = ({Pictionary}: {Pictionary: string;}): ScFile => ({
  type: ScNodeType.File,
  content: `import test from 'tape';
import { readFolder, writeDirectoryTree, directoryToGenerator } from '../dist';
import path from 'path';
import { ScDirectory, ScFile } from '@source-craft/types';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('read the ScDirectory for this package', async t => {
  const d = readFolder(\`\${__dirname}/../\`);
  t.equal(5, Object.keys(d.children).length);

  writeDirectoryTree(\`\${__dirname}/.fixture\`, d);

  ((d.children['src'] as ScDirectory).children['index.ts'] as ScFile).content += 'hello';

  writeDirectoryTree(\`\${__dirname}/.fixture\`, d);
});

test('generate a generator for this package', async t => {
  const d = readFolder(\`\${__dirname}/../\`);

  const generator = directoryToGenerator(d, [
    {
      literal: '${Pictionary}',
      template: 'Pictionary',
    },
  ]);

  writeDirectoryTree(\`\${__dirname}/.generator\`, generator);
});
`
});
    