import type { GetStaticPaths, GetStaticProps } from 'next';
import { getNews, getTopHeader } from '~/lib/contentLoaders';
import { getPagesPaths } from '~/lib/getStaticPaths';
// eslint-disable-next-line no-restricted-imports
import { LIMIT, type Props } from '../index';


// eslint-disable-next-line no-restricted-imports
export { default } from '../index';


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPagesPaths(LIMIT, 'news');

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { page: string }> = async ({ params }) => {
  if (!params) return { notFound: true };
  const page = Number.parseInt(params.page, 10);

  const [
    news,
    topHeader,
  ] = await Promise.all([
    getNews({ page, limit: LIMIT }),
    getTopHeader(),
  ]);

  return { props: { news, topHeader } };
};

