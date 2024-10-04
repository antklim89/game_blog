import type { FC } from 'react';
import List from '@mui/material/List';
import type { INews } from '~/lib/types';
import NewsListItem from './NewsListItem';


const NewsList: FC<{ news: INews[] }> = async ({ news }) => {
  return (
    <List>
      {news.map(newsItem => (
        <NewsListItem {...newsItem} key={newsItem.title} />
      ))}
    </List>
  );
};

export default NewsList;
