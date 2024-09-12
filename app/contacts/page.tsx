import type { Metadata } from 'next';
import Contacts from '~/components/layout/Contacts';
import Layout from '~/components/layout/Layout';
import { getTopHeader } from '~/lib/contentLoaders';


export const metadata: Metadata = {
  title: 'Contact',
};

async function ContactsPage() {
  const { contactsImage } = await getTopHeader();

  return (
    <Layout image={contactsImage}>
      <Contacts />
    </Layout>
  );
}

export default ContactsPage;
