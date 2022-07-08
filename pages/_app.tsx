import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { SessionProvider } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthWrapper from "../components/AuthWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthWrapper>
        <Header />
        <Component {...pageProps} />
      </AuthWrapper>
    </SessionProvider>
  );
}

export default MyApp;
