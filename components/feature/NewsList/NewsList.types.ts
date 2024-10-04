import type { INews } from '~/lib/types';


export interface NewsListProps {
  news: INews[];
}

export type NewsListItemProps = INews;
