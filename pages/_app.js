import DefaultLayout from "../Layout/DefaultLayout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
