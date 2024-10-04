import type { FC } from 'react';
import List from '@mui/material/List';
import type { NewsListProps } from './NewsList.types';
import NewsListItem from './NewsListItem';


const NewsList: FC<NewsListProps> = async ({ news }) => {
  return (
    <List>
      {news.map(newsItem => (
        <NewsListItem {...newsItem} key={newsItem.title} />
      ))}
    </List>
  );
};

export default NewsList;
