/* eslint-disable */
import type { InitOptions } from 'netlify-cms-core'
import { about } from './about';
import { intro } from './intro';
import { projects } from './projects';


export const cmsConfig: InitOptions = {
    config: {
        load_config_file: false,

        site_url: 'https://cozy-clothing.netlify.app',

        backend: {
            name: 'git-gateway',
            branch: 'main',
        },

        local_backend: { allowed_hosts: ['192.168.90.19', '127.0.0.1'] },
        publish_mode: 'editorial_workflow',
        media_folder: 'public/uploaded/',
        collections: [
            projects,
            {
                label: 'Site',
                name: 'site',
                editor: { preview: false },
                i18n: true,
                files: [intro, about],
            },
        ],
    },
};
