import type { FC } from 'react';
import Footer from '~/components/layout/Footer';
import Header from '~/components/layout/Header';
import type { LayoutProps } from './Layout.types';


const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <div className="root">
      <Header {...props} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

