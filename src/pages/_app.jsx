import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto flex flex-col justify-start	max-w-screen-md p-4 pb-16 gap-12 h-fit">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
