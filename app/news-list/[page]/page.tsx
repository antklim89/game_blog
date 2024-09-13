import Container from '@mui/material/Container';
import { z } from 'zod';
import type { Metadata } from 'next';
import NewsList from '~/components/feature/NewsList';
import Layout from '~/components/layout/Layout';
import Pagination from '~/components/ui/Pagination';
import { getNews, getTopHeader } from '~/lib/contentLoaders';


export const metadata: Metadata = {
  title: 'News',
};

async function ReviewsPage({ params }: { params: { page: string } }) {
  const page = await z.coerce.number().default(1).catch(1).parseAsync(params.page);
  const [
    news,
    topHeader,
  ] = await Promise.all([
    getNews({ limit: 8, page }),
    getTopHeader(),
  ]);

  return (
    <Layout image={topHeader.newsImage}>
      <Container>
        <Pagination
          currentPage={page}
          path="/news-list"
          totalPages={news.totalPages}
        />
        <NewsList news={news.items} />
        <Pagination
          currentPage={page}
          path="/news-list"
          totalPages={news.totalPages}
        />
      </Container>
    </Layout>
  );
}

export default ReviewsPage;
