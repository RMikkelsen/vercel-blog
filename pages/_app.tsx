import { AppProps } from "next/app";
import { SessionProvider } from 'next-auth/react';

const App = ({ Component, pageProps }: AppProps) => {
  return (

    // sessionProvider is from next-auth and wraps root component to persist user authenticaiton across entire application 
    <SessionProvider session={pageProps.session}>
    <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
