import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { FooterProps } from './Footer.types';


const Footer: FC<FooterProps> = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: ({ palette }) => palette.primary.main,
                py: 2,
            }}
        >
            <Container>
                <Typography color="white">
                    &copy; All Right Reserved {new Date().getFullYear()}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;

