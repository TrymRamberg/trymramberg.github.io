import Head from "next/head";
import { Profile } from "../components/profile";
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

      <Profile />
      <Portfolio />
      <Blog />
    </div>
  );
}
