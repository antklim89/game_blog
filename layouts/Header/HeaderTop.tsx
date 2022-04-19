import type { Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC } from 'react';

import background from './background.jpg';
import HeaderLogo from './HeaderLogo';


const HeaderTop: FC = () => {
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    if (!matches) return null;
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: 4,
                backgroundImage: `URL(${background.src})`,
                minHeight: 320,
            }}
        >
            <HeaderLogo />
            <Container>
                <Typography py={4} textAlign="center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Typography>
            </Container>
        </Box>
    );
};

export default HeaderTop;
