import type { INews } from '~/types';


export interface NewsListProps {
  news: INews[];
}

export type NewsListItemProps = INews;
