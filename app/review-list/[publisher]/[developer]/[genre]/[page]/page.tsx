import Container from '@mui/material/Container';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { z } from 'zod';
import ReviewsList from '~/components/feature/ReviewsList';
import SelectReviewFields from '~/components/feature/SelectReviewFields';
import Layout from '~/components/layout/Layout';
import Pagination from '~/components/ui/Pagination';
import { getReviews, getTopHeader } from '~/lib/contentLoaders';
import { reviewParamsSchema } from '~/lib/schemas';


export const metadata: Metadata = {
  title: 'Reviews',
};

async function ReviewsPage({ params }: { params: z.infer<typeof reviewParamsSchema> }) {
  const result = await reviewParamsSchema.safeParseAsync(params);
  if (!result.success) notFound();

  const {
    publisher,
    developer,
    genre,
    page,
  } = result.data;

  const { reviewsImage } = await getTopHeader();
  const reviews = await getReviews({
    limit: 8,
    page,
    search: {
      publisher: publisher === 'all' ? undefined : publisher,
      developer: developer === 'all' ? undefined : developer,
      genre: genre === 'all' ? undefined : genre,
    },
  });

  return (
    <Layout image={reviewsImage}>
      <Container>
        <SelectReviewFields
          developer={developer}
          genre={genre}
          publisher={publisher}
        />
        <Pagination
          currentPage={page}
          path={`/reviews/${publisher}/${developer}/${genre}`}
          totalPages={reviews.totalPages}
        />
        <ReviewsList reviews={reviews.items} />
        <Pagination
          currentPage={page}
          path={`/reviews/${publisher}/${developer}/${genre}`}
          totalPages={reviews.totalPages}
        />
      </Container>
    </Layout>
  );
}

export default ReviewsPage;
