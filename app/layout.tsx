import process from 'node:process';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from '~/lib/constants';
import { globalStyles, theme } from '~/lib/theme';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700-italic.css';


export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(process.env.URL ?? 'http://localhost:3000'),
    title: {
      default: DEFAULT_TITLE,
      template: `%s | ${DEFAULT_TITLE}`,
    },
    keywords: ['games', 'blog'],
    description: DEFAULT_DESCRIPTION,
    twitter: {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    },
    openGraph: {
      type: 'website',
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    },
  };
}

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles styles={globalStyles} />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}

export const dynamic = 'force-static';

export default RootLayout;
