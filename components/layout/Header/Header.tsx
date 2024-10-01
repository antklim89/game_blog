import type { FC } from 'react';
import type { HeaderProps } from './Header.types';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import HeaderLinks from './HeaderLinks';
import HeaderTop from './HeaderTop';


const Header: FC<HeaderProps> = (props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <HeaderTop {...props} />
      <Container>
        <HeaderLinks />
      </Container>
    </AppBar>
  );
};

export default Header;

