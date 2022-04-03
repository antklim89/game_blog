import { FC } from 'react';

import Header from '../Header';


const Layout: FC = ({ children }) => {
    return (
        <div className="root">
            <Header />
            <main>
                {children}
            </main>
            <footer>
                FOOTER
            </footer>
        </div>
    );
};

export default Layout;

