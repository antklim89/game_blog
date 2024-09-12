import List from '@mui/material/List';
import type { FC } from 'react';
import { getNews } from '~/lib/contentLoaders';
import NewsListItem from './NewsListItem';


const NewsList: FC = async () => {
  const news = await getNews({ limit: 5 });

  return (
    <List>
      {news.items.map(newsItem => (
        <NewsListItem {...newsItem} key={newsItem.title} />
      ))}
    </List>
  );
};

export default NewsList;

