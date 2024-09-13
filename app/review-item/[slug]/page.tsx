import Container from '@mui/material/Container';
import type { Metadata } from 'next';
import Review from '~/components/feature/Review';
import Layout from '~/components/layout/Layout';
import { DEFAULT_DESCRIPTION } from '~/lib/constants';
import { getReview, getTopHeader } from '~/lib/contentLoaders';


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const {
    title,
    genre,
    developer,
    publisher,
    previewImage,
  } = await getReview(params.slug);

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
  const { homeImage } = await getTopHeader();
  const review = await getReview(params.slug);

  return (
    <Layout image={homeImage}>
      <Container>
        <Review review={review} />
      </Container>
    </Layout>
  );
}

export default ReviewPage;
