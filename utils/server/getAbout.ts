import type { IAbout } from '~/types/about';
import { getFile } from '~/utils/server/getFile';


export async function getAbout() {
  const about = await getFile<IAbout>('about', 'index');

  return about;
}
