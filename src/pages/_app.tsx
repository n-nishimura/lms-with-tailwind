import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '@/components/layouts/Header';

//全ページで共通で使われるファイル
//1:57:23確認

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
  <Header />
  <Component {...pageProps} />
  </>
  );
}

export default MyApp


