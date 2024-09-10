import type { FC } from 'react';
import Footer from '~/layouts/Footer';
import Header from '~/layouts/Header';
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

