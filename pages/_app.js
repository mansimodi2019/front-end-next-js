import DefaultLayout from "../Layout/DefaultLayout";
import "../styles/globals.css";
import { ContextProvider } from "../Context";

export default function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ContextProvider>
  );
}
