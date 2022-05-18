import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import GamesCarousel from '~/components/GamesCarousel';
import Pagination from '~/components/Pagination';
import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import NewsList from '~/layouts/NewsList';
import ReviewList from '~/layouts/ReviewsList';
import type { IReview, INews, ITopHeader, IGamesCarousel, GetFilesResult } from '~/types';
import { getReviews, getNews, getHeaderTop, getGamesCarousel } from '~/utils/server';


interface Props {
    reviews: GetFilesResult<IReview>
    news: GetFilesResult<INews>
    topHeader: ITopHeader
    gamesCarousel: IGamesCarousel[]
}


const HomePage: NextPage<Props> = ({ reviews, news, topHeader, gamesCarousel }) => {
    return (
        <Layout image={topHeader.image} text={topHeader.text} >
            <Seo title="Home" />
            <Container>
                <GamesCarousel gamesCarousel={gamesCarousel} />
                <Link passHref href="/reviews">
                    <a>
                        <Typography
                            color="primary"
                            component="h3"
                            mt={4}
                            textAlign="center"
                            variant="h3"
                        >
                            Reviews
                        </Typography>
                    </a>
                </Link>
                <ReviewList reviews={reviews.items} />
                <Pagination path="/reviews" totalPages={reviews.totalPages} />
                <Box my={4}>
                    <Link passHref href="/news">
                        <a>
                            <Typography
                                color="primary"
                                component="h3"
                                mt={4}
                                textAlign="center"
                                variant="h3"
                            >
                                News
                            </Typography>
                        </a>
                    </Link>
                    <NewsList news={news.items} />
                    <Pagination path="/news" totalPages={news.totalPages} />
                </Box>
            </Container>
        </Layout>
    );
};

export default HomePage;


export const getStaticProps: GetStaticProps<Props> = async () => {
    const reviews = await getReviews({ limit: 4 });
    const news = await getNews({ limit: 5 });
    const topHeader = await getHeaderTop();
    const gamesCarousel = await getGamesCarousel();

    return { props: { reviews, news, topHeader, gamesCarousel: gamesCarousel.items } };
};


