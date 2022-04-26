import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { GetStaticProps, NextPage } from 'next';

import GamesCarousel from '~/components/GamesCarousel';
import Seo from '~/components/Seo';
import NewsList from '~/layouts/NewsList';
import ReviewList from '~/layouts/ReviewsList';
import { IReview, INews } from '~/types';
import { getReviews, getNews } from '~/utils';


interface Props {
    reviews: IReview[]
    news: INews[]
}


const Home: NextPage<Props> = ({ reviews, news }) => {
    return (
        <>
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
        </>
    );
};

export default Home;


export const getStaticProps: GetStaticProps<Props> = async () => {
    try {
        const reviews = await getReviews();
        const news = await getNews();

        return { props: { reviews, news } };
    } catch (error) {
        return { props: { reviews: [], news: [] } };
    }
};
