import { readdirSync } from 'fs';
import { resolve } from 'path';


export function getGamesPaths() {
    const gamesFiles = readdirSync(resolve(process.cwd(), './public/content/games'));

    const paths = gamesFiles
        .filter((file) => (/\.json$/gi).test(file))
        .map((file) => file.replace('.json', ''))
        .map((file) => ({ params: { slug: file } }));
    return paths;
}
