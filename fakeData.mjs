import fs from 'fs';
import path from 'path';

import _ from 'lodash';


/**
 * News
 */
const newsDir = path.resolve('public/content/news');
_.times(1, (index) => {
    const title = `Test ${index}`;
    const dateNow = new Date();
    const fileName = getFilename(title, dateNow);

    const newsItem = JSON.stringify({
        publishedAt: dateNow.toUTCString(),
        body: 'Lorem ipsum',
        title,
        previewImage: '/wesley-tingey--l4UCK06uNM-unsplash.jpg',
    }, null, 4);

    fs.writeFileSync(path.resolve(newsDir, fileName), newsItem);
});


/**
 * Utils
 */
function getFilename(title, dateNow) {
    const y = dateNow.getFullYear();
    const m = dateNow.getMonth();
    const d = dateNow.getDay();
    const h = dateNow.getHours();
    const min = dateNow.getMinutes();
    const s = dateNow.getSeconds();
    const fileName = `${_.kebabCase(`${y}${m}${d}${h}${min}${s}-${title}`)}.json`;

    return fileName;
}
