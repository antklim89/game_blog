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
                    <Box display="flex" justifyContent="flex-end">
                        <Link passHref href="/reviews">
                            <Button color="primary" component="a" variant="outlined" >
                                Show more...
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box mb={8}>
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
                    <Box display="flex" justifyContent="flex-end">
                        <Link passHref href="/news">
                            <Button color="primary" component="a" variant="outlined" >
                                Show more...
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
};

export default HomePage;


export const getStaticProps: GetStaticProps<Props> = async () => {
    const reviews = await getReviews({ limit: 4 });
    const news = await getNews({ limit: 5 });
    const topHeader = await getTopHeader();
    const gamesCarousel = await getGamesCarousel();

    return { props: { reviews, news, topHeader, gamesCarousel: gamesCarousel.items } };
};


