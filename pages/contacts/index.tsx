import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import Contacts from '~/layouts/Contacts';
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
                <Contacts />
            </Container>
        </Layout>
    );
};

export default ContactsPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const topHeader = await getTopHeader();

    return { props: { topHeader } };
};
