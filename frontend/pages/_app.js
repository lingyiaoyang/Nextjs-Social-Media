import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../component/navigation';
import { jsx, ThemeProvider } from '@emotion/react';
import theme from '../theme/theme';
import SEO from '../next.seo.config';
import { DefaultSeo } from 'next-seo';
import { QueryClientProvider, QueryClient } from 'react-query';
import getConfig from 'next/config';

// initial all  import
const queryClient = new QueryClient();
const { publicRuntimeConfig } = getConfig();

const MyApp = ({ Component, pageProps, card }) => {
  // console.log('🚀 -> file: _app.js -> line 16 -> MyApp -> card', card);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <Navigation />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/cards`);
  const card = await res.json();

  return { card };
};

export default MyApp;
