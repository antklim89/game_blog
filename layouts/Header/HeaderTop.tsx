import type { Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC } from 'react';

import { HeaderProps } from './Header.types';
import HeaderLogo from './HeaderLogo';


const HeaderTop: FC<HeaderProps> = ({ image, text, title }) => {
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
                backgroundImage: `URL(${image})`,
                minHeight: 320,
                background: `
                    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                    no-repeat center/cover  URL(${image})
                `,
            }}
        >
            <HeaderLogo />
            {text && (
                <Container>
                    <Box dangerouslySetInnerHTML={{ __html: text }} sx={{ py: 4, textAlign: 'center' }} />
                </Container>
            )}
            {title && (
                <Container sx={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography
                        alignItems="center"
                        color="white"
                        textAlign="center"
                        variant="h1"
                    >
                        {title}
                    </Typography>
                </Container>
            )}
        </Box>
    );
};

export default HeaderTop;
