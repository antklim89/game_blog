import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';

import Pagination from '~/components/Pagination';
import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import NewsList from '~/layouts/NewsList';
import { INews, GetFilesResult, ITopHeader } from '~/types';
import { getNews, getTopHeader } from '~/utils/server';


export const LIMIT = 10;

export interface Props {
    news: GetFilesResult<INews>
    topHeader: ITopHeader
}

const NewsPage: NextPage<Props> = ({ news, topHeader }) => {
    return (
        <Layout image={topHeader.newsImage} title="News">
            <Seo title="News" />
            <Container>
                <Pagination path="/news" totalPages={news.totalPages} />
                <NewsList news={news.items} />
                <Pagination path="/news" totalPages={news.totalPages} />
            </Container>
        </Layout>
    );
};

export default NewsPage;


export const getStaticProps: GetStaticProps<Props> = async () => {
    const news = await getNews({ limit: LIMIT });
    const topHeader = await getTopHeader();

    return { props: { news, topHeader } };
};
