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
            widget: 'text',
        },
        {
            name: 'image',
            widget: 'image',
        }
    ],
}