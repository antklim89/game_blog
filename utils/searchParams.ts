import { NextRouter } from 'next/router';


export function setSearchParams(router: NextRouter, key: string, value: string|number|null): void {
    const query = new URLSearchParams(router.query as Record<string, string>);
    if (!value) {
        query.delete(key);
    } else {
        query.set(key, String(value));
    }
    const newUrl = `${router.route}?${query.toString()}`;

    router.push(newUrl);
}


export function getSearchParam(router: NextRouter, key: string): string|null {
    const query = new URLSearchParams(router.query as Record<string, string>);

    return query.get(key);
}
