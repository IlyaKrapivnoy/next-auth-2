import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { SessionProvider } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
