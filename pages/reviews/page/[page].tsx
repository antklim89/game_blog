import type { GetStaticPaths, GetStaticProps } from 'next';
import { getReviews, getReviewsFields, getTopHeader } from '~/lib/contentLoaders';
import { getPagesPaths } from '~/lib/getStaticPaths';
// eslint-disable-next-line no-restricted-imports
import { LIMIT, type Props } from '../index';


// eslint-disable-next-line no-restricted-imports
export { default } from '../index';


export const getStaticPaths: GetStaticPaths = async () => {
  const path = await getPagesPaths(LIMIT, 'reviews');

  return {
    paths: path,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { page: string }> = async ({ params }) => {
  if (!params) return { notFound: true };
  const page = Number.parseInt(params.page, 10);
  const [
    reviews,
    reviewFields,
    topHeader,
  ] = await Promise.all([
    getReviews({ page, limit: LIMIT }),
    getReviewsFields(),
    getTopHeader(),
  ]);

  return { props: { reviews, reviewFields, topHeader } };
};

