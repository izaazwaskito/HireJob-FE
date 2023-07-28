import { Provider } from "react-redux";
import { store } from "../configs/redux/store";
import "../styles/globals.css";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <div className={opensans.className}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
