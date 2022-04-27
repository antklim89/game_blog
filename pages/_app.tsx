import '~/styles/globals.scss';

import { Theme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import type { AppProps } from 'next/app';
import { useCallback } from 'react';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700-italic.css';

import { theme } from '~/styles/theme';


const MyApp = ({ Component, pageProps }: AppProps) => {
    const styles = useCallback(({ palette }: Theme) => ({
        b: { color: palette.secondary.main },
        strong: { color: palette.secondary.main },
    }), []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles styles={styles} />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
