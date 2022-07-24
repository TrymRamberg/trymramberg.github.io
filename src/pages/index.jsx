import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Profile } from "../components/profile";
import { About } from "../components/about";
import { Portfolio } from "../components/portfolio";
import { Blog } from "../components/blog";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trym Ramberg</title>
        <meta name="Personal Website" content="My Personal Website" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="container mx-auto flex flex-col	 max-w-screen-md p-4 h-screen gap-8">
        <Header />
        <Profile />
        <About />
        <Portfolio />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}
