import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import NewsList from '~/layouts/NewsList';
import { INews } from '~/types';
import { getNews } from '~/utils/server';


interface Props {
    news: INews[]
}

const NewsPage: NextPage<Props> = ({ news }) => {
    return (
        <Layout>
            <Seo title="News" />
            <Container>
                <NewsList news={news} />
            </Container>
        </Layout>
    );
};

export default NewsPage;


export const getStaticProps: GetStaticProps<Props> = async () => {
    try {
        const news = await getNews({ page: 1, limit: 5 });

        return { props: { news } };
    } catch (error) {
        console.error(error);
        return { props: { news: [] } };
    }
};
