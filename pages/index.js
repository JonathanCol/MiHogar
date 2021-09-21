import Head from "next/head";
import Layout from "../components/Layout/layout";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mi Hogar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </div>
  );
}
