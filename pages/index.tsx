import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { GetStaticProps, NextPage } from 'next';

import GamesCarousel from '~/components/GamesCarousel';
import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import NewsList from '~/layouts/NewsList';
import ReviewList from '~/layouts/ReviewsList';
import { IReview, INews, ITopHeader, IGamesCarousel } from '~/types';
import { getReviews, getNews, getHeaderTop, getGamesCarousel } from '~/utils/server';


interface Props {
    reviews: IReview[]
    news: INews[]
    topHeader: ITopHeader
    gamesCarousel: IGamesCarousel[]
}


const Home: NextPage<Props> = ({ reviews, news, topHeader, gamesCarousel }) => {
    return (
        <Layout image={topHeader.image} text={topHeader.text} >
            <Seo title="Home" />
            <Container>
                <GamesCarousel gamesCarousel={gamesCarousel} />
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
        const topHeader = await getHeaderTop();
        const gamesCarousel = await getGamesCarousel();

        return { props: { reviews, news, topHeader, gamesCarousel: gamesCarousel.items } };
    } catch (error) {
        console.error(error);
        return { props: { reviews: [], news: [], topHeader: {}, gamesCarousel: [] } };
    }
};


