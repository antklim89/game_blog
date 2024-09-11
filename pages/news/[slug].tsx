import Container from '@mui/material/Container';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import NewsItem from '~/layouts/NewsItem';
import { getNewsItem } from '~/lib/contentLoaders';
import { getNewsPaths } from '~/lib/getStaticPaths';
import type { INews } from '~/lib/types';


interface Props {
  newsItem: INews;
}


const ReviewPage: NextPage<Props> = ({ newsItem }) => {
  return (
    <Layout>
      <Seo title={newsItem.title} />
      <Container>
        <NewsItem {...newsItem} />
      </Container>
    </Layout>
  );
};

export default ReviewPage;


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getNewsPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({ params }) => {
  if (!params) return { notFound: true };

  const newsItem = await getNewsItem(params.slug);

  return { props: { newsItem } };
};


