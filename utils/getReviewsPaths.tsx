import { readdirSync } from 'fs';
import { resolve } from 'path';


export function getReviewsPaths() {
    const files = readdirSync(resolve(process.cwd(), './public/content/reviews'));

    const paths = files
        .filter((file) => (/\.json$/gi).test(file))
        .map((file) => file.replace('.json', ''))
        .map((file) => ({ params: { slug: file } }));
    return paths;
}
