import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../component/navigation';
import { jsx, ThemeProvider } from '@emotion/react';
import theme from '../theme/theme';
import SEO from '../next.seo.config';
import { DefaultSeo } from 'next-seo';
import { QueryClientProvider, QueryClient } from 'react-query';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Footer from '../component/footer';
import styled from '@emotion/styled';

// initial all  import
const queryClient = new QueryClient();
const { publicRuntimeConfig } = getConfig();



const MyApp = ({ Component, pageProps, card }) => {
  // console.log('🚀 -> file: _app.js -> line 16 -> MyApp -> card', card);
  const router = useRouter();
  const user = true;
  try {
    if (!user) {
      useEffect(() => {
        return router.push('/login');
      }, []);
      // return null;
    }
  } catch (error) {}
  


  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <Navigation />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
        <Footer />
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
