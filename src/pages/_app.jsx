import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto flex flex-col	max-w-screen-md p-4 h-screen gap-8">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
