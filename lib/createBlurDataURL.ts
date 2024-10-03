import path from 'node:path';
import process from 'node:process';
import NodeCache from 'node-cache';
import { defaultBlurDataUrl } from './constants';


const cache = new NodeCache({ stdTTL: 3 * 24 * 60 * 60 });

export async function createBlurDataURL(src: string): Promise<string> {
  if (cache.has(src)) return cache.get(src) as string;

  try {
    const { default: sharp } = await import('sharp');

    const imagePath = src.startsWith('http')
      ? await (await fetch(src)).arrayBuffer()
      : path.join(process.cwd(), 'public', src);

    const buffer = await sharp(imagePath)
      .resize({ width: 20 })
      .webp()
      .toBuffer();

    const result = `data:image/webp;base64,${buffer.toString('base64')}`;
    cache.set(src, result);
    return result;
  } catch (error) {
    console.error(error);
    return defaultBlurDataUrl;
  }
}
