import { FC } from 'react';

import Footer from '../Footer';
import Header from '../Header';

import { LayoutProps } from './Layout.types';


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

