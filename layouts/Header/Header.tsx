import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FC } from 'react';

import { HeaderProps } from './Header.types';
import HeaderLinks from './HeaderLinks';


const Header: FC<HeaderProps> = () => {
    return (
        <AppBar>
            <Container>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link passHref href="/">
                        <Typography component="a" fontWeight="bold" variant="h6">
                            GAME BLOG
                        </Typography>
                    </Link>
                    <HeaderLinks />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;

