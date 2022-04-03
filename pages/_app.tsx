import '~/styles/globals.scss';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import Layout from '~/layouts/Layout';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700-italic.css';

import { theme } from '../styles/theme';


const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
};

export default MyApp;
