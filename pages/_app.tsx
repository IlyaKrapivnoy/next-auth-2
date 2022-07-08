import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/Header'
import {SessionProvider} from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
