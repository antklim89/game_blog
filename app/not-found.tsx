import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import Layout from '~/components/layout/Layout';


export const metadata: Metadata = {
  title: 'Page Not Found',
};


async function NotFoundPage() {
  return (
    <Layout>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Typography textAlign="center" variant="h2">
          404 | Not Found
        </Typography>
        <Link component={NextLink} fontSize="2rem" href="/">
          Go to the Home Page
        </Link>
      </Box>
    </Layout>
  );
}

export default NotFoundPage;
