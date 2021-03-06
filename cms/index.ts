import type { InitOptions } from 'netlify-cms-core';

import { about } from './about';
import { gamesCarousel } from './gamesCarousel';
import { news } from './news';
import { reviews } from './reviews';
import { topHeader } from './topHeader';


export const cmsConfig: InitOptions = {
    config: {
        load_config_file: false,

        site_url: 'https://game-blog-dev.netlify.app',

        backend: {
            name: 'git-gateway',
            branch: 'main',
        },

        local_backend: { allowed_hosts: ['192.168.90.19', '127.0.0.1'] },
        publish_mode: 'editorial_workflow',
        media_folder: 'public/uploaded/',
        collections: [
            reviews,
            news,
            {
                label: 'Site',
                name: 'site',
                editor: { preview: false },
                files: [
                    about,
                    topHeader,
                    gamesCarousel,
                ],
            },
        ],
    },
};
