import Box from '@mui/material/Box';
import type { FC } from 'react';
import Footer from '~/components/layout/Footer';
import Header from '~/components/layout/Header';
import type { LayoutProps } from './Layout.types';


const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <Box component="body" sx={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', height: '100vh' }}>
      <Header {...props} />
      <main>
        {children}
      </main>
      <Footer />
    </Box>
  );
};

export default Layout;

