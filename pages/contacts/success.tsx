import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import { ITopHeader } from '~/types';
import { getTopHeader } from '~/utils/server';


interface Props {
    topHeader: ITopHeader
}

const ContactsPage: NextPage<Props> = ({ topHeader }) => {
    return (
        <Layout image={topHeader.contactsImage} title="Contacts">
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
                    <Button component={Link} href="/" variant="contained">
                        &larr;&emsp;go home
                    </Button>
                </Paper>
            </Container>
        </Layout>
    );
};

export default ContactsPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const topHeader = await getTopHeader();

    return { props: { topHeader } };
};
