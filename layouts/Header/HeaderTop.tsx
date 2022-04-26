import type { Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC } from 'react';

import background from './background.jpg';
import { HeaderProps } from './Header.types';
import HeaderLogo from './HeaderLogo';


const HeaderTop: FC<HeaderProps> = ({ image, text }) => {
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    if (!image) return null;
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
            {text && (
                <Container>
                    <Typography py={4} textAlign="center">
                        {text}
                    </Typography>
                </Container>
            )}
        </Box>
    );
};

export default HeaderTop;
