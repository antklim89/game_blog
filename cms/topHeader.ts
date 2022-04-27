/* eslint-disable */
import type { CmsCollectionFile } from 'netlify-cms-core'



export const topHeader: CmsCollectionFile = {
    label: 'Top Header',
    name: 'topHeader',
    file: 'public/content/topHeader/index.json',
    media_folder: 'images',
    public_folder: '/content/topHeader/images',
    fields: [
        {
            name: 'text',
            widget: 'markdown',
            required: true,
            buttons: ['bold', 'italic', 'heading-one', 'heading-two', 'numbered-list', 'bulleted-list'],
            editor_components: [],
        },
        {
            name: 'image',
            widget: 'image',
            required: true,
        }
    ],
}