import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import GamesCarousel from '~/components/feature/GamesCarousel';
import NewsList from '~/components/feature/NewsList';
import ReviewsList from '~/components/feature/ReviewsList';
import Layout from '~/components/layout/Layout';
import { getNews, getReviews, getTopHeader } from '~/lib/contentLoaders';


async function HomePage() {
  const { homeImage } = await getTopHeader();
  const reviews = await getReviews({ limit: 4 });
  const news = await getNews({ limit: 4 });

  return (
    <Layout image={homeImage}>
      <Container>
        <GamesCarousel />
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
          <ReviewsList reviews={reviews.items} />
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
}

export default HomePage;
