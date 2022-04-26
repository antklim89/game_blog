import { readFileSync } from 'fs';
import { resolve } from 'path';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { GetStaticProps, NextPage } from 'next';

import GamesCarousel from '~/components/GamesCarousel';
import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import NewsList from '~/layouts/NewsList';
import ReviewList from '~/layouts/ReviewsList';
import { IReview, INews, ITopHeader } from '~/types';
import { getReviews, getNews } from '~/utils';


interface Props {
    reviews: IReview[]
    news: INews[]
    topHeader: ITopHeader
}


const Home: NextPage<Props> = ({ reviews, news, topHeader }) => {
    return (
        <Layout image={topHeader.image} text={topHeader.text} >
            <Seo title="Home" />
            <Container>
                <GamesCarousel />
                <Typography
                    component="h3"
                    mt={4}
                    textAlign="center"
                    variant="h3"
                >
                    Reviews
                </Typography>
                <ReviewList reviews={reviews} />
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

export default Home;


export const getStaticProps: GetStaticProps<Props> = async () => {
    try {
        const reviews = await getReviews();
        const news = await getNews();

        const topHeaderJson = readFileSync(resolve(process.cwd(), './public/content/topHeader/index.json'), 'utf-8');
        const topHeader = JSON.parse(topHeaderJson);

        return { props: { reviews, news, topHeader } };
    } catch (error) {
        return { props: { reviews: [], news: [], topHeader: {} } };
    }
};
