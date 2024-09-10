import { type Theme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { useCallback, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { theme } from '~/styles/theme';
import '~/styles/globals.scss';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700-italic.css';


function MyApp({ Component, pageProps }: AppProps) {
  const styles = useCallback(({ palette }: Theme) => ({
    b: { color: palette.secondary.main },
    strong: { color: palette.secondary.main },
  }), []);

  useEffect(() => {
    if (!window.location.hash.startsWith('#invite_token')) return;
    import('netlify-identity-widget')
      .then(({ default: netlifyIdentity }) => {
        netlifyIdentity.init({
          container: '#netlify-identity-widget',
          locale: 'en',
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={styles} />
      <Component {...pageProps} />
      <div id="netlify-identity-widget" />
    </ThemeProvider>
  );
}

export default MyApp;
