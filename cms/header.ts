import path from 'node:path';
import type { CmsCollectionFile } from 'decap-cms-core';
import { baseContentFolder, baseMediaFolder, basePublicFolder } from './constants';


const name = 'header';

export const header: CmsCollectionFile = {
  label: 'Header',
  name,
  file: path.join(baseContentFolder, `${name}.json`),
  media_folder: path.join(baseMediaFolder, name),
  public_folder: path.join(basePublicFolder, name),
  fields: [
    {
      name: 'homeText',
      widget: 'markdown',
      required: true,
      buttons: ['bold', 'italic', 'heading-one', 'heading-two', 'numbered-list', 'bulleted-list'],
      editor_components: [],
    },
    {
      name: 'homeImage',
      widget: 'image',
      required: true,
    },
    {
      name: 'reviewsImage',
      widget: 'image',
      required: true,
    },
    {
      name: 'newsImage',
      widget: 'image',
      required: true,
    },
    {
      name: 'aboutImage',
      widget: 'image',
      required: true,
    },
    {
      name: 'contactsImage',
      widget: 'image',
      required: true,
    },
  ],
};
