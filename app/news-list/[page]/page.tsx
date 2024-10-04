import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@mui/material/Container';
import { z } from 'zod';
import NewsList from '~/components/feature/NewsList';
import Layout from '~/components/layout/Layout';
import Pagination from '~/components/ui/Pagination';
import { getHeader, getNews } from '~/lib/contentLoaders';


const LIMIT = 8;

export const metadata: Metadata = {
  title: 'News',
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const news = await getNews({ limit: Infinity });

  const paths = Array.from({ length: Math.ceil(news.items.length / LIMIT) }, (_, i) => ({
    page: String(i + 1),
  }));

  return paths;
}

async function ReviewsPage({ params }: { params: { page: string } }) {
  const page = await z.coerce.number().min(1).parseAsync(params.page).catch(() => notFound());
  const [{ newsImage }, { items: news, totalPages }] = await Promise.all([
    getHeader(),
    getNews({ limit: LIMIT, page }),
  ]);

  return (
    <Layout image={newsImage}>
      <Container>
        <Pagination
          currentPage={page}
          path="/news-list"
          totalPages={totalPages}
        />
        <NewsList news={news} />
        <Pagination
          currentPage={page}
          path="/news-list"
          totalPages={totalPages}
        />
      </Container>
    </Layout>
  );
}

export default ReviewsPage;
