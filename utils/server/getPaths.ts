import path from 'node:path';
import process from 'node:process';
import { readdir } from 'fs-extra';
import { CONTENT_PATH } from './constants';


export async function getPaths(filePath: string) {
  const files = await readdir(path.resolve(process.cwd(), CONTENT_PATH, filePath));

  const paths = files
    .filter(file => (/\.json$/i).test(file))
    .map(file => file.replace('.json', ''))
    .map(file => ({ params: { slug: file } }));

  return paths;
}
