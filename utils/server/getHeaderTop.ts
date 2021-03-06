import { ITopHeader } from '~/types';
import { getFile } from '~/utils/server/getFile';


export async function getTopHeader() {
    const headerTop = await getFile<ITopHeader>('topHeader', 'index');
    return headerTop;
}
