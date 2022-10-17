import type { AppProps } from 'next/app';
import GlobalContextWrapper from 'context/GlobalContextWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextWrapper>
      <Component {...pageProps} />
    </GlobalContextWrapper>
  );
}

export default MyApp;
