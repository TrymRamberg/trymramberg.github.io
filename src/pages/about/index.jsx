import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Trym Ramberg</title>
        <meta name="Personal Website" content="My Personal Website" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="flex justify-between items-center py-4 rounded-lg">
        <div className="flex flex-col w-full flex-grow">
          <div className="text-2xl md:text-4xl font-bold">About</div>
          <div className="text-sm md:text-lg font-medium pr-4 pt-2 text-gray-600 dark:text-gray-400">
            <p>Hey!</p> I&apos;m Trym. This is my bio.
          </div>
        </div>
      </div>
    </>
  );
}
