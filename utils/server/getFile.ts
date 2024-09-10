import path from 'node:path';
import process from 'node:process';
import { readJSON } from 'fs-extra';
import { CONTENT_PATH } from './constants';


export async function getFile<T>(filePath: string, slug: string): Promise<T> {
  const fileFullPath = path.resolve(process.cwd(), CONTENT_PATH, filePath, `${slug}.json`);
  const file = await readJSON(fileFullPath, 'utf-8') as Record<string, unknown>;

  file.slug = slug;
  return file as T;
}
