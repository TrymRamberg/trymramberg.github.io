import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trym Ramberg</title>
        <meta name="Personal Website" content="My Personal Website" />
        <link rel="icon" href="/tr.svg" />
      </Head>

      <h3 className="text-xl font-medium text-red-300">Hello world!</h3>

      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}
