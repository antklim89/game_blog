import fs from 'fs';
import path from 'path';

import faker from '@faker-js/faker';
import _ from 'lodash';


const NEWS_NUMBER = 0;
const REVIEWS_NUMBER = 25;

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
        title: _.capitalize(title),
        previewImage: '/wesley-tingey--l4UCK06uNM-unsplash.jpg',
    }, null, 4);

    fs.writeFileSync(path.resolve(newsDir, fileName), newsItem);
}

/**
 * Reviews
 */
const reviewsDir = path.resolve('public/content/reviews');
const genres = ['Action RPG', 'RPG', 'Action', 'FPS', 'RTS', 'MOBA', 'Platformer', 'Simulator'];
for (let index = 0; index < REVIEWS_NUMBER; index += 1) {
    const title = faker.lorem.words(_.random(3, 6, false));
    const dateNow = new Date();
    dateNow.setMinutes(index);
    const fileName = `${_.kebabCase(title)}.json`;

    const reviewsItem = JSON.stringify({
        body: faker.lorem.paragraphs(_.random(3, 6, false)),
        title: _.capitalize(title),
        genre: _.sample(genres),
        publisher: faker.company.companyName(),
        year: faker.date.between('1989-01-01T00:00:00.000Z', '2020-01-01T00:00:00.000Z').getFullYear(),
        previewImage: '/wesley-tingey--l4UCK06uNM-unsplash.jpg',

    }, null, 4);

    fs.writeFileSync(path.resolve(reviewsDir, fileName), reviewsItem);
}
