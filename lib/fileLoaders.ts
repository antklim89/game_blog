import path from 'node:path';
import fs from 'fs-extra';
import NodeCache from 'node-cache';
import type { z, ZodObject, ZodRawShape } from 'zod';
import type { Paginated } from './types';


const nodeCache = new NodeCache({ stdTTL: 60 * 10 });
export const CONTENT_PATH = path.resolve(process.cwd(), 'public/content');

export function filterContent<T extends Record<string, unknown>>(
  content: T[],
  search?: Record<string, string | undefined>,
): T[] {
  if (!search) return content;
  if (typeof content !== 'object') return content;
  return content.filter((file) => {
    return Object.entries(search).every(([key, value]) => value == null || file[key] === value);
  });
}
export function paginateContent<T extends Record<string, unknown>>(
  content: T[],
  page: number,
  limit: number,
): Paginated<T> {
  return {
    items: content.slice((page - 1) * limit, (page * limit)),
    totalPages: Math.ceil(content.length / limit),
  };
}


export async function getFiles<T extends ZodRawShape>(
  filesFolder: string,
  schema: ZodObject<T>,
): Promise<z.infer<ZodObject<T>>[]> {
  if (nodeCache.has(filesFolder)) return nodeCache.get(filesFolder) as Promise<z.infer<ZodObject<T>>[]>;
  const filesPath = path.join(CONTENT_PATH, filesFolder);
  const fileNames = await fs.readdir(filesPath);

  const resultPromises = fileNames
    .filter(fileName => path.extname(fileName) === '.json')
    .map(async fileName => getFile(path.join(filesFolder, path.parse(fileName).name), schema));

  const result = await Promise.all(resultPromises);
  nodeCache.set(filesFolder, result);

  return result;
}

export async function getFile<T extends ZodRawShape>(
  fileName: string,
  schema: ZodObject<T>,
): Promise<z.infer<ZodObject<T>>> {
  if (nodeCache.has(fileName)) return nodeCache.get(fileName) as Promise<z.infer<ZodObject<T>>>;
  const filePath = path.join(CONTENT_PATH, path.format({ name: fileName, ext: '.json' }));
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const fileJson = JSON.parse(fileContent) as Record<string, unknown>;

  fileJson.slug = path.parse(fileName).name;

  const result = await schema.parseAsync(fileJson);
  nodeCache.set(fileName, result);

  return result;
}
