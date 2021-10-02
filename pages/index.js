import Head from "next/head";

import Layout from "../components/Layout/layout";
import Cards from "../components/Cards/Cards";
import ButtonMed from "../components/Buttons/ButtonsMed";
import VideosYou from "../components/Videos/VideosYou";
import CardsImage from "../components/CardsImage/CardsImage";

import FooterLogo from "../components/FooterLogo/FooterLogo";
import FooterLinks from "../components/FooterLinks/FooterLinks";
import GridCenter from "../components/GridCenter/GridCenter";
import GridCaract from "../components/GridCaract/GridCaract";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mi Hogar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      <GridCenter texto="Conectamos Ganaderos con Inversionistas" />
      <GridCenter texto="¿Cómo funciona Sosty?" />
      <GridCaract />
      <CardsImage />
      <GridCenter />
      <FooterLogo />
      <FooterLinks />
      <GridCenter />
    </div>
  );
}
