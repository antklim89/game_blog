import type { CmsCollectionFile } from 'decap-cms-core';


export const topHeader: CmsCollectionFile = {
  label: 'Top Header',
  name: 'topHeader',
  file: 'public/content/topHeader/index.json',
  media_folder: 'images',
  public_folder: '/content/topHeader/images',
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
