import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';


const ContactsPage: NextPage = () => {
    return (
        <Layout>
            <Seo title="contacts" />
            <h1>Contacts</h1>
        </Layout>
    );
};

export default ContactsPage;


export const getStaticProps: GetStaticProps = async () => {

    return { props: { foo: 'bar' } };
};
