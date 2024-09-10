import type { GetStaticPaths, GetStaticProps } from 'next';
import { getNews, getPagesPaths, getTopHeader } from '~/utils/server';
// eslint-disable-next-line no-restricted-imports
import { LIMIT, type Props } from '../index';


// eslint-disable-next-line no-restricted-imports
export { default } from '../index';


export const getStaticPaths: GetStaticPaths = async () => {
  const path = await getPagesPaths(LIMIT, 'news');

  return {
    paths: path,
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

