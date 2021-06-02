import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../component/navigation';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
