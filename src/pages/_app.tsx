// pages/_app.tsx
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('MyApp is running');
  return <Component {...pageProps} />;
}

export default MyApp;
