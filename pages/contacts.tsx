import type { GetStaticProps, NextPage } from 'next';

import Seo from '~/components/Seo';


const ContactsPage: NextPage = () => {
    return (
        <>
            <Seo title="contacts" />
            <h1>Contacts</h1>
        </>
    );
};

export default ContactsPage;


export const getStaticProps: GetStaticProps = async () => {

    return { props: { foo: 'bar' } };
};
