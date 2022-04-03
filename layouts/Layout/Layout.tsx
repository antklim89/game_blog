import { FC } from 'react';

import Footer from '../Footer';
import Header from '../Header';


const Layout: FC = ({ children }) => {
    return (
        <div className="root">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

