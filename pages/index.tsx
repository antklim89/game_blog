import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import GamesCarousel from '~/components/GamesCarousel';
import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import NewsList from '~/layouts/NewsList';
import ReviewList from '~/layouts/ReviewsList';
import type { IReview, INews, ITopHeader, IGamesCarousel, GetFilesResult } from '~/types';
import { getReviews, getNews, getTopHeader, getGamesCarousel } from '~/utils/server';


interface Props {
    reviews: GetFilesResult<IReview>
    news: GetFilesResult<INews>
    topHeader: ITopHeader
    gamesCarousel: IGamesCarousel[]
}


const HomePage: NextPage<Props> = ({ reviews, news, topHeader, gamesCarousel }) => {
    return (
        <Layout image={topHeader.homeImage} text={topHeader.homeText} >
            <Seo title="Home" />
            <Container>
                <GamesCarousel gamesCarousel={gamesCarousel} />
                <Box mb={8}>
                    <Link href="/reviews">
                        <Typography
                            color="primary"
                            component="h3"
                            mt={4}
                            textAlign="center"
                            variant="h3"
                        >
                            Reviews
                        </Typography>
                    </Link>
                    <ReviewList reviews={reviews.items} />
                    <Box display="flex" justifyContent="flex-end">
                        <Button
                            color="primary"
                            component={Link}
                            href="/reviews"
                            variant="outlined"
                        >
                            Show more...
                        </Button>
                    </Box>
                </Box>
                <Box mb={8}>
                    <Link href="/news">
                        <Typography
                            color="primary"
                            component="h3"
                            mt={4}
                            textAlign="center"
                            variant="h3"
                        >
                            News
                        </Typography>
                    </Link>
                    <NewsList news={news.items} />
                    <Box display="flex" justifyContent="flex-end">
                        <Button
                            color="primary"
                            component={Link}
                            href="/news"
                            variant="outlined"
                        >
                            Show more...
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
};

export default HomePage;


export const getStaticProps: GetStaticProps<Props> = async () => {
    const [
        reviews,
        news,
        topHeader,
        gamesCarousel,
    ] = await Promise.all([
        getReviews({ limit: 4 }),
        getNews({ limit: 5 }),
        getTopHeader(),
        getGamesCarousel(),
    ]);

    return { props: { reviews, news, topHeader, gamesCarousel: gamesCarousel.items } };
};


