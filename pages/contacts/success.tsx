import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import Link from 'next/link';

import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import topImage from '~/public/ahmad-mohammed-wGc4AQ3BJ_U-unsplash.jpg';


const ContactsPage: NextPage = () => {
    return (
        <Layout image={topImage} title="Contacts">
            <Seo title="Contacts" />
            <Container>
                <Paper sx={{ p: 4 }}>
                    <Typography
                        component="p"
                        fontSize={['2rem', '4rem']}
                        mb={4}
                        py={20}
                        textAlign="center"
                        textTransform="uppercase"
                        variant="h3"
                    >
                        the message was sent successfully
                    </Typography>
                    <Link passHref href="/">
                        <Button component="a" variant="contained">
                            &larr;&emsp;go home
                        </Button>
                    </Link>
                </Paper>
            </Container>
        </Layout>
    );
};

export default ContactsPage;
