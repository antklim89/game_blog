import Container from '@mui/material/Container';
import type { NextPage } from 'next';

import Seo from '~/components/Seo';
import Contacts from '~/layouts/Contacts';
import Layout from '~/layouts/Layout';


const ContactsPage: NextPage = () => {
    return (
        <Layout>
            <Seo title="Contacts" />
            <Container>
                <Contacts />
            </Container>
        </Layout>
    );
};

export default ContactsPage;
