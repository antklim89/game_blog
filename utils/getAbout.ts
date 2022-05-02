import Showdown from 'showdown';

import { IAbout } from '~/types/about';
import { getFile } from '~/utils/getFile';


export async function getAbout() {
    const about = await getFile<IAbout>('about', 'index');
    about.text = new Showdown.Converter().makeHtml(about.text);

    return about;
}
