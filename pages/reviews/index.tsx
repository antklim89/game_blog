import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import type { GetServerSideProps, NextPage } from 'next';
import ReviewsList from '~/components/feature/ReviewsList';
import SelectReviewFields from '~/components/feature/SelectReviewFields';
import Layout from '~/components/layout/Layout';
import Seo from '~/components/Seo';
import Pagination from '~/components/ui/Pagination';
import { getReviews, getReviewsFields, getTopHeader } from '~/lib/contentLoaders';
import type {
  IReview,
  ITopHeader,
  Paginated,
  ReviewFieldsList,
} from '~/lib/types';


// eslint-disable-next-line react-refresh/only-export-components
export const LIMIT = 10;

export interface Props {
  reviews: Paginated<IReview>;
  reviewFields: ReviewFieldsList;
  topHeader: ITopHeader;
}

const ReviewsPage: NextPage<Props> = ({ reviews, reviewFields, topHeader }) => {
  return (
    <Layout image={topHeader.reviewsImage} title="Reviews">
      <Seo title="Reviews" />
      <Container>
        <Box
          alignItems="center"
          display="flex"
          flexDirection={['column', null, 'row']}
          justifyContent="space-around"
        >
          <SelectReviewFields {...reviewFields} />
          <Pagination path="/reviews" totalPages={reviews.totalPages} />
        </Box>
        <ReviewsList reviews={reviews.items} />
        <Pagination path="/reviews" totalPages={reviews.totalPages} />
      </Container>
    </Layout>
  );
};

export default ReviewsPage;

export const getStaticProps: GetServerSideProps<Props, { page?: string }> = async () => {
  const [
    reviews,
    reviewFields,
    topHeader,
  ] = await Promise.all([
    getReviews({ limit: LIMIT }),
    getReviewsFields(),
    getTopHeader(),
  ]);
  return { props: { reviews, reviewFields, topHeader } };
};

