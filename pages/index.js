import Head from "next/head";

import Layout from "../components/Layout/layout";
import Cards from "../components/Cards/Cards";
import ButtonMed from "../components/Buttons/ButtonsMed";
import VideosYou from "../components/Videos/VideosYou";
import CardsImage from "../components/CardsImage/CardsImage";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mi Hogar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      <Cards />
      <ButtonMed />
      <VideosYou />
      <CardsImage />
    </div>
  );
}
