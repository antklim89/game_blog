import Container from '@mui/material/Container';
import type { NextPage } from 'next';

import Seo from '~/components/Seo';
import Contacts from '~/layouts/Contacts';
import Layout from '~/layouts/Layout';
import topImage from '~/public/ahmad-mohammed-wGc4AQ3BJ_U-unsplash.jpg';


const ContactsPage: NextPage = () => {
    return (
        <Layout image={topImage} title="Contacts">
            <Seo title="Contacts" />
            <Container>
                <Contacts />
            </Container>
        </Layout>
    );
};

export default ContactsPage;
