import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import GamesCarousel from '~/components/feature/GamesCarousel';
import NewsList from '~/components/feature/NewsList';
import ReviewList from '~/components/feature/ReviewList';
import Layout from '~/components/layout/Layout';
import { getHeader, getNews, getReviews } from '~/lib/contentLoaders';


async function HomePage() {
  const [{ homeImage }, { items: reviews }, { items: news }] = await Promise.all([
    getHeader(),
    getReviews({ limit: 4 }),
    getNews({ limit: 4 }),
  ]);

  return (
    <Layout image={homeImage}>
      <Container>
        <GamesCarousel />
        <Box mb={8}>
          <Link href="/review-list">
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
          <ReviewList reviews={reviews} />
          <Box display="flex" justifyContent="flex-end">
            <Button
              color="primary"
              component={Link}
              href="/review-list"
              variant="outlined"
            >
              Show more...
            </Button>
          </Box>
        </Box>
        <Box mb={8}>
          <Link href="/news-list">
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
          <NewsList news={news} />
          <Box display="flex" justifyContent="flex-end">
            <Button
              color="primary"
              component={Link}
              href="/news-list"
              variant="outlined"
            >
              Show more...
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export default HomePage;
