import Head from "next/head";

import Layout from "../components/Layout/layout";
import CardsImage from "../components/CardsImage/CardsImage";
import FooterLogo from "../components/FooterLogo/FooterLogo";
import FooterLinks from "../components/FooterLinks/FooterLinks";
import GridCenter from "../components/GridCenter/GridCenter";
import GridCaract from "../components/GridCaract/GridCaract";
import DivGreen from "../components/DivGreen/DivGreen";
import Avatars from "../components/Avatars/Avatars";
import DivMargin from "../components/DivMargin";

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
      <DivMargin />
      <DivGreen />
      <DivMargin />
      <GridCenter texto="Nuestros Proyectos" />
      <DivMargin />
      <CardsImage />
      <DivMargin />
      <GridCenter texto="Testimonios" />
      <DivMargin />
      <Avatars />
      <DivMargin />
      <FooterLogo />
      <FooterLinks />
      <GridCenter />
    </div>
  );
}
