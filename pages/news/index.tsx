import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';
import NewsList from '~/components/feature/NewsList';
import Layout from '~/components/layout/Layout';
import Seo from '~/components/Seo';
import Pagination from '~/components/ui/Pagination';
import { getNews, getTopHeader } from '~/lib/contentLoaders';
import type { INews, ITopHeader, Paginated } from '~/lib/types';


// eslint-disable-next-line react-refresh/only-export-components
export const LIMIT = 10;

export interface Props {
  news: Paginated<INews>;
  topHeader: ITopHeader;
}

const NewsPage: NextPage<Props> = ({ news, topHeader }) => {
  return (
    <Layout image={topHeader.newsImage} title="News">
      <Seo title="News" />
      <Container>
        <Pagination path="/news" totalPages={news.totalPages} />
        <NewsList news={news.items} />
        <Pagination path="/news" totalPages={news.totalPages} />
      </Container>
    </Layout>
  );
};

export default NewsPage;


export const getStaticProps: GetStaticProps<Props> = async () => {
  const [
    news,
    topHeader,
  ] = await Promise.all([
    getNews({ limit: LIMIT }),
    getTopHeader(),
  ]);

  return { props: { news, topHeader } };
};
