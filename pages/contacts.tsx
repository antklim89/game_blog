import Container from '@mui/material/Container';
import type { GetStaticProps, NextPage } from 'next';
import Contacts from '~/components/feature/Contacts';
import Layout from '~/components/layout/Layout';
import Seo from '~/components/Seo';
import { getTopHeader } from '~/lib/contentLoaders';
import type { ITopHeader } from '~/lib/types';


interface Props {
  topHeader: ITopHeader;
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
