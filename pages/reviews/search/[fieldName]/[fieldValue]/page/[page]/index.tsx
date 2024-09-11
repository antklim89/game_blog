import type { GetStaticPaths, GetStaticProps } from 'next';
import { getReviews, getReviewsFields, getTopHeader } from '~/lib/contentLoaders';
import { getReviewsFilterPaths, type ReviewsFilterFieldsParams } from '~/lib/getStaticPaths';
import { LIMIT, type Props } from '~/pages/reviews';


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getReviewsFilterPaths(LIMIT);

  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps: GetStaticProps<Props, ReviewsFilterFieldsParams> = async ({ params }) => {
  if (!params) return { notFound: true };
  const { fieldValue, fieldName } = params;
  const page = Number.parseInt(params.page, 10);

  const [
    reviews,
    reviewFields,
    topHeader,
  ] = await Promise.all([
    getReviews({ page, limit: LIMIT, search: { [fieldName]: fieldValue } }),
    getReviewsFields(),
    getTopHeader(),
  ]);

  return { props: { reviews, reviewFields, topHeader } };
};

export { default } from '~/pages/reviews';
