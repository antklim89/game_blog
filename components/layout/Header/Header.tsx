import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import type { FC } from 'react';
import HeaderLinks from './HeaderLinks';
import HeaderTop from './HeaderTop';
import type { HeaderProps } from './Header.types';


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
