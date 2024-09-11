import Container from '@mui/material/Container';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Review from '~/components/feature/Review';
import Layout from '~/components/layout/Layout';
import Seo from '~/components/Seo';
import { getReview } from '~/lib/contentLoaders';
import { getReviewsPaths } from '~/lib/getStaticPaths';
import type { IReview } from '~/lib/types';


interface Props {
  review: IReview;
}


const ReviewPage: NextPage<Props> = ({ review }) => {
  return (
    <Layout image={review.previewImage} title={review.title}>
      <Seo title={review.title} />
      <Container>
        <Review {...review} />
      </Container>
    </Layout>
  );
};

export default ReviewPage;


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getReviewsPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({ params }) => {
  if (!params) return { notFound: true };

  const review = await getReview(params.slug);

  return { props: { review } };
};


