import type { FC } from 'react';
import type { FooterProps } from './Footer.types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const Footer: FC<FooterProps> = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        py: 2,
      }}
    >
      <Container>
        <Typography color="white">
          &copy; All Right Reserved
          {' '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

