import fs from 'fs';
import path from 'path';

import faker from '@faker-js/faker';
import _ from 'lodash';


const NEWS_NUMBER = 24;

/**
 * News
 */
const newsDir = path.resolve('public/content/news');
for (let index = 0; index < NEWS_NUMBER; index += 1) {
    const title = faker.lorem.words(_.random(3, 6, false));
    const dateNow = new Date();
    dateNow.setMinutes(index);
    const fileName = `${_.kebabCase(title)}.json`;

    const newsItem = JSON.stringify({
        publishedAt: dateNow.toUTCString(),
        body: faker.lorem.paragraphs(_.random(3, 6, false)),
        title,
        previewImage: '/wesley-tingey--l4UCK06uNM-unsplash.jpg',
    }, null, 4);

    fs.writeFileSync(path.resolve(newsDir, fileName), newsItem);
}
