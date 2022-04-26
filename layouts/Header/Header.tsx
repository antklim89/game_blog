import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { FC } from 'react';

import { HeaderProps } from './Header.types';
import HeaderLinks from './HeaderLinks';
import HeaderTop from './HeaderTop';


const Header: FC<HeaderProps> = (props) => {
    return (
        <AppBar position="static">
            <HeaderTop {...props} />
            <Container>
                <HeaderLinks />
            </Container>
        </AppBar>
    );
};

export default Header;

