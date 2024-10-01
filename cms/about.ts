import type { CmsCollectionFile } from 'decap-cms-core';
import path from 'node:path';
import { baseContentFolder, baseMediaFolder, basePublicFolder } from './constants';


const name = 'about';

export const about: CmsCollectionFile = {
  label: 'About',
  name,
  file: path.join(baseContentFolder, `${name}.json`),
  media_folder: path.join(baseMediaFolder, name),
  public_folder: path.join(basePublicFolder, name),
  fields: [
    {
      name: 'text',
      widget: 'markdown',
    },
  ],
};
