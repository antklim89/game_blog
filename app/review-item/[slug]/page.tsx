import type { Metadata } from 'next';
import Container from '@mui/material/Container';
import { notFound } from 'next/navigation';
import Review from '~/components/feature/Review';
import Layout from '~/components/layout/Layout';
import { DEFAULT_DESCRIPTION } from '~/lib/constants';
import { getReview } from '~/lib/contentLoaders';


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const review = await getReview(params.slug);
  if (review == null) return {};
  const {
    title,
    genre,
    developer,
    publisher,
    previewImage,
  } = review;

  return {
    title,
    keywords: ['games', 'blog', genre, developer, publisher],
    twitter: {
      title,
      description: DEFAULT_DESCRIPTION,
      images: [previewImage],
    },
    openGraph: {
      type: 'website',
      title,
      description: DEFAULT_DESCRIPTION,
      images: [previewImage],
    },
  };
}

async function ReviewPage({ params }: { params: { slug: string } }) {
  const review = await getReview(params.slug);
  if (review == null) return notFound();

  return (
    <Layout image={review.previewImage}>
      <Container>
        <Review review={review} />
      </Container>
    </Layout>
  );
}

export default ReviewPage;
