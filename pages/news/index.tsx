import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';

import Pagination from '~/components/Pagination';
import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import NewsList from '~/layouts/NewsList';
import { INews, GetFilesResult } from '~/types';
import { getNews } from '~/utils/server';


interface Props {
    news: GetFilesResult<INews>
}

const NewsPage: NextPage<Props> = ({ news }) => {
    return (
        <Layout>
            <Seo title="News" />
            <Container>
                <Pagination totalPages={news.totalPages} />
                <NewsList news={news.items} />
            </Container>
        </Layout>
    );
};

export default NewsPage;


export const getStaticProps: GetStaticProps<Props> = async () => {
    const news = await getNews({ page: 1, limit: 5 });

    return { props: { news } };
};
