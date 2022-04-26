import { FC } from 'react';

import Footer from '../Footer';
import Header from '../Header';

import { LayoutProps } from './Layout.types';


const Layout: FC<LayoutProps> = ({ children, topHeader }) => {

    return (
        <div className="root">
            <Header {...topHeader} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

