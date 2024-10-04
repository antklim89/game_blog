import type { Metadata } from 'next';
import Container from '@mui/material/Container';
import NewsItem from '~/components/feature/NewsItem';
import Layout from '~/components/layout/Layout';
import { getHeader, getNewsItem } from '~/lib/contentLoaders';


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { title, previewImage } = await getNewsItem(params.slug);

  return {
    title,
    keywords: ['games', 'blog', 'news'],
    twitter: {
      title,
      images: [previewImage],
    },
    openGraph: {
      type: 'website',
      title,
      images: [previewImage],
    },
  };
}

async function ReviewPage({ params }: { params: { slug: string } }) {
  const [{ homeImage }, newsItem] = await Promise.all([
    getHeader(),
    getNewsItem(params.slug),
  ]);

  return (
    <Layout image={homeImage}>
      <Container>
        <NewsItem newsItem={newsItem} />
      </Container>
    </Layout>
  );
}

export default ReviewPage;
