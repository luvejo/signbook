import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Signbook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>Hello, Friend.</main>
    </div>
  );
}
