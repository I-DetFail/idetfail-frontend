import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <NextNProgress color="#4D77FF" />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
