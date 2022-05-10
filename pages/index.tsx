import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { GetStaticProps, NextPage } from 'next';

import GamesCarousel from '~/components/GamesCarousel';
import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import NewsList from '~/layouts/NewsList';
import ReviewList from '~/layouts/ReviewsList';
import { IReview, INews, ITopHeader, IGamesCarousel, GetFilesResult } from '~/types';
import { getReviews, getNews, getHeaderTop, getGamesCarousel } from '~/utils/server';


interface Props {
    reviews: GetFilesResult<IReview>
    news: GetFilesResult<INews>
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
                    color="primary"
                    component="h3"
                    mt={4}
                    textAlign="center"
                    variant="h3"
                >
                    Reviews
                </Typography>
                <ReviewList reviews={reviews.items} />
                <Typography
                    color="primary"
                    component="h3"
                    mt={4}
                    textAlign="center"
                    variant="h3"
                >
                    News
                </Typography>
                <NewsList news={news.items} />
            </Container>
        </Layout>
    );
};

export default Home;


export const getStaticProps: GetStaticProps<Props> = async () => {
    const reviews = await getReviews();
    const news = await getNews({ page: 1, limit: 5 });
    const topHeader = await getHeaderTop();
    const gamesCarousel = await getGamesCarousel();

    return { props: { reviews, news, topHeader, gamesCarousel: gamesCarousel.items } };
};


