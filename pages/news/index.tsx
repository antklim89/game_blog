import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import NewsList from '~/layouts/NewsList';
import { INews } from '~/types';
import { getNews } from '~/utils';


interface Props {
    news: INews[]
}

const NewsPage: NextPage<Props> = ({ news }) => {
    return (
        <Layout>
            <Seo title="News" />
            <Container>
                <Typography
                    component="h3"
                    mt={4}
                    textAlign="center"
                    variant="h3"
                >
                    News
                </Typography>
                <NewsList news={news} />
            </Container>
        </Layout>
    );
};

export default NewsPage;


export const getStaticProps: GetStaticProps<Props> = async () => {
    try {
        const news = await getNews();

        return { props: { news } };
    } catch (error) {
        console.error(error);
        return { props: { news: [] } };
    }
};
