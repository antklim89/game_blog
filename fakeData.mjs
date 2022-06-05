import fs from 'fs';
import path from 'path';

import faker from '@faker-js/faker';
import _ from 'lodash';


const NEWS_NUMBER = 50;
const REVIEWS_NUMBER = 50;

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
        createdAt: dateNow,
        publishedAt: dateNow.toUTCString(),
        body: faker.lorem.paragraphs(_.random(3, 6, false)),
        title: _.capitalize(title),
        previewImage: `/images/review_placeholder_${_.random(1, 5, false)}.jpg`,
    }, null, 4);

    fs.writeFileSync(path.resolve(newsDir, fileName), newsItem);
}

/**
 * Reviews
 */
const reviewsDir = path.resolve('public/content/reviews');
const genres = ['Action RPG', 'RPG', 'Action', 'FPS', 'RTS', 'MOBA', 'Platformer', 'Simulator'];
const developers = _.times(20, () => faker.company.companyName());
const publishers = _.times(20, () => faker.company.companyName());

for (let index = 0; index < REVIEWS_NUMBER; index += 1) {
    const title = faker.lorem.words(_.random(3, 6, false));
    const dateNow = new Date();
    dateNow.setMinutes(index);
    const fileName = `${_.kebabCase(title)}.json`;

    const reviewsItem = JSON.stringify({
        body: faker.lorem.paragraphs(_.random(3, 6, false)),
        createdAt: dateNow,
        title: _.capitalize(title),
        genre: _.sample(genres),
        publisher: _.sample(publishers),
        developer: _.sample(developers),
        gameRelease: faker.date.between('1989-01-01T00:00:00.000Z', '2020-01-01T00:00:00.000Z'),
        previewImage: `/images/review_placeholder_${_.random(1, 5, false)}.jpg`,
    }, null, 4);

    fs.writeFileSync(path.resolve(reviewsDir, fileName), reviewsItem);
}
