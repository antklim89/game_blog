import fs from 'node:fs';
import path from 'node:path';
import { faker } from '@faker-js/faker';
import _ from 'lodash';


const START_DATE = '1989-01-01T00:00:00.000Z';
const NEWS_NUMBER = 50;
const REVIEWS_NUMBER = 200;

/**
 * News
 */
const newsDir = path.resolve('public/content/news');
const newsImages = fs.readdirSync(path.resolve('public/images/news'))
  .map(fileName => path.join(`/images/news`, fileName));


for (let index = 0; index < NEWS_NUMBER; index += 1) {
  const title = faker.lorem.words(_.random(3, 6, false));
  const publishedAt = faker.date.between({ from: START_DATE, to: new Date() });

  const fileName = `${_.kebabCase(title)}.json`;
  /**
   * @type {import('./lib/types').INews}
   */
  const newsItem = {
    publishedAt,
    body: generateMarkdown({ images: newsImages }),
    title: _.capitalize(title),
    previewImage: _.sample(newsImages),
  };


  fs.writeFileSync(path.resolve(newsDir, fileName), JSON.stringify(newsItem, null, 2));
}

/**
 * Reviews
 */
const reviewsDir = path.resolve('public/content/reviews');
const reviewsImages = fs.readdirSync(path.resolve('public/images/reviews'))
  .map(fileName => path.join(`/images/reviews`, fileName));

const genres = ['Action RPG', 'RPG', 'Action', 'FPS', 'RTS', 'MOBA', 'Platformer', 'Simulator'];
const developers = [
  'Bethesda Softworks',
  'Blizzard Entertainment',
  'Capcom',
  'CD Projekt',
  'Electronic Arts',
  'FromSoftware',
  'Guerrilla Games',
  'id Software',
  'Insomniac Games',
  'Kojima Productions',
  'Konami',
  'Naughty Dog',
  'Nintendo',
  'Rockstar Games',
  'Square Enix',
  'Ubisoft',
  'Valve Corporation',
  'Warner Bros. Interactive Entertainment',
];
const publishers = [
  '2K Games',
  'Activision',
  'Bandai Namco Entertainment',
  'Capcom',
  'Electronic Arts',
  'Focus Home Interactive',
  'Koch Media',
  'Microsoft Studios',
  'Nintendo',
  'Paradox Interactive',
  'Sega',
  'Sony Interactive Entertainment',
  'Square Enix',
  'Take-Two Interactive',
  'Telltale Games',
  'Ubisoft',
  'Warner Bros. Interactive Entertainment',
  'Xbox Game Studios',
];

for (let index = 0; index < REVIEWS_NUMBER; index += 1) {
  const title = faker.lorem.words(_.random(2, 5, false));
  const gameRelease = faker.date.between({ from: START_DATE, to: new Date() });
  const publishedAt = faker.date.between({ from: gameRelease, to: new Date() });

  const fileName = `${_.kebabCase(title)}.json`;
  /**
   * @type {import('./lib/types').IReview}
   */
  const reviewsItem = {
    body: generateMarkdown({ images: reviewsImages }),
    createdAt: publishedAt,
    title: _.capitalize(title),
    genre: _.sample(genres),
    publisher: _.sample(publishers),
    developer: _.sample(developers),
    gameRelease,
    previewImage: _.sample(reviewsImages),
  };

  fs.writeFileSync(path.resolve(reviewsDir, fileName), JSON.stringify(reviewsItem, null, 2));
}

function generateMarkdown({ images }) {
  const arr = [
    () => `## ${faker.lorem.words({ min: 3, max: 10 })}`,
    () => `### ${faker.lorem.words({ min: 3, max: 10 })}`,
    () => `#### ${faker.lorem.words({ min: 3, max: 10 })}`,
    () => `${faker.lorem.paragraph({ min: 5, max: 50 })}`,
    () => `${faker.lorem.paragraph({ min: 5, max: 100 })}`,
    () => `${faker.lorem.paragraph({ min: 5, max: 25 })}`,
    () => `${faker.lorem.paragraph({ min: 5, max: 75 })}`,
    () => `${faker.lorem.paragraph({ min: 5, max: 50 })}`,
    () => `***${faker.lorem.paragraph({ min: 5, max: 10 })}***`,
    () => `*${faker.lorem.paragraph({ min: 5, max: 10 })}*`,
    () => `[${faker.lorem.words({ min: 3, max: 5 })}](${faker.internet.url()})`,
    () => `![${faker.lorem.words({ min: 3, max: 5 })}](${_.sample(images)})`,
    () => `![${faker.lorem.words({ min: 3, max: 5 })}](${_.sample(images)})`,
    () => `![${faker.lorem.words({ min: 3, max: 5 })}](${_.sample(images)})`,
    () => `> ${faker.lorem.paragraph({ min: 5, max: 10 })}`,
    () => _.times(5, () => `- ${faker.lorem.sentence({ min: 3, max: 5 })}\n`).join(''),
  ];


  return _.shuffle(arr).map(fn => fn()).join('\n\n');
}

