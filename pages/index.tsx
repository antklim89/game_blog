import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { GetStaticProps, NextPage } from 'next';
import GamesCarousel from '~/components/feature/GamesCarousel';
import NewsList from '~/components/feature/NewsList';
import ReviewList from '~/components/feature/ReviewsList';
import Layout from '~/components/layout/Layout';
import Seo from '~/components/Seo';
import {
  getGamesCarousel,
  getNews,
  getReviews,
  getTopHeader,
} from '~/lib/contentLoaders';
import type {
  IGamesCarousel,
  INews,
  IReview,
  ITopHeader,
  Paginated,
} from '~/lib/types';


interface Props {
  reviews: Paginated<IReview>;
  news: Paginated<INews>;
  topHeader: ITopHeader;
  gamesCarousel: IGamesCarousel['items'];
}


const HomePage: NextPage<Props> = ({
  reviews,
  news,
  topHeader,
  gamesCarousel,
}) => {
  return (
    <Layout image={topHeader.homeImage} text={topHeader.homeText}>
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

  return { props: {
    reviews,
    news,
    topHeader,
    gamesCarousel: gamesCarousel.items,
  } };
};


