import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { FC } from 'react';

import HeaderLinks from './HeaderLinks';
import HeaderTop from './HeaderTop';


const Header: FC = () => {
    return (
        <AppBar>
            <Container>
                <HeaderTop />
                <HeaderLinks />
            </Container>
        </AppBar>
    );
};

export default Header;

