import Showdown from 'showdown';

import { ITopHeader } from '~/types';
import { getFile } from '~/utils/server/getFile';


export async function getHeaderTop() {
    const headerTop = await getFile<ITopHeader>('topHeader', 'index');
    if (headerTop.text) headerTop.text = new Showdown.Converter().makeHtml(headerTop.text);
    return headerTop;
}
