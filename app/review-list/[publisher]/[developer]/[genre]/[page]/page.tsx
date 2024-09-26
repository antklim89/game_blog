import type { Metadata } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ReviewList from '~/components/feature/ReviewList';
import SelectReviewFields from '~/components/feature/SelectReviewFields';
import Layout from '~/components/layout/Layout';
import Pagination from '~/components/ui/Pagination';
import { getReviews, getReviewsFields, getTopHeader } from '~/lib/contentLoaders';
import { filterContent } from '~/lib/fileLoaders';


interface ReviewsPageProps {
  params: {
    genre: string;
    publisher: string;
    developer: string;
    page: number;
  };
}

export const metadata: Metadata = {
  title: 'Reviews',
};

export async function generateStaticParams() {
  const reviews = await getReviews({ limit: Infinity });
  const reviewsFields = await getReviewsFields();
  const publishers = reviewsFields.publisher;
  const developers = reviewsFields.developer;
  const genres = reviewsFields.genre;

  const allOptions = [
    { publisher: 'all', developer: 'all', genre: 'all' },
    ...publishers.map(publisher => ({ publisher, developer: 'all', genre: 'all' })),
    ...developers.map(developer => ({ publisher: 'all', developer, genre: 'all' })),
    ...genres.map(genre => ({ publisher: 'all', developer: 'all', genre })),
    ...publishers.flatMap(publisher =>
      developers.map(developer => ({ publisher, developer, genre: 'all' })),
    ),
    ...publishers.flatMap(publisher =>
      genres.map(genre => ({ publisher, developer: 'all', genre })),
    ),
    ...developers.flatMap(developer =>
      genres.map(genre => ({ publisher: 'all', developer, genre })),
    ),
  ];

  const paths = allOptions.flatMap((o) => {
    const contentFiltered = filterContent(reviews.items, {
      publisher: o.publisher === 'all' ? undefined : o.publisher,
      developer: o.developer === 'all' ? undefined : o.developer,
      genre: o.genre === 'all' ? undefined : o.genre,
    });

    return Array.from({ length: Math.ceil(contentFiltered.length / 8) }, (_, i) => ({
      page: String(i + 1),
      publisher: encodeURIComponent(o.publisher),
      developer: encodeURIComponent(o.developer),
      genre: encodeURIComponent(o.genre),
    }));
  });

  return paths;
}

async function ReviewsPage({ params }: ReviewsPageProps) {
  const publisher = decodeURIComponent(params.publisher);
  const developer = decodeURIComponent(params.developer);
  const genre = decodeURIComponent(params.genre);
  const page = params.page;


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
          path={`/review-list/${publisher}/${developer}/${genre}`}
          totalPages={reviews.totalPages}
        />
        <ReviewList reviews={reviews.items} />
        {reviews.items.length === 0 && (
          <Typography textAlign="center" variant="h1">No reviews found</Typography>
        )}
        <Pagination
          currentPage={page}
          path={`/review-list/${publisher}/${developer}/${genre}`}
          totalPages={reviews.totalPages}
        />
      </Container>
    </Layout>
  );
}

export default ReviewsPage;
