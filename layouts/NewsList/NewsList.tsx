import List from '@mui/material/List';
import type { FC } from 'react';

import NewsListItem from './NewsListItem';
import type { NewsListProps } from './NewsList.types';


const NewsList: FC<NewsListProps> = ({ news }) => {
  return (
    <List>
      {news.map(newsItem => (
        <NewsListItem {...newsItem} key={newsItem.title} />
      ))}
    </List>
  );
};

export default NewsList;

