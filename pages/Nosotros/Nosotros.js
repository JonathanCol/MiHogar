import React from "react";

import Layout from "../../components/Layout/layout";
import GridCenter from "../../components/GridCenter/GridCenter";
import GridValores from "../../components/GridValores/GridValores";
import CardsImage from "../../components/CardsImage";

import FooterLogo from "../../components/FooterLogo/FooterLogo";
import FooterLinks from "../../components/FooterLinks/FooterLinks";

const Nosotros = () => {
  return (
    <div>
      <Layout />
      <GridCenter texto="Mi Hogar" />
      <GridValores />
      <GridCenter />
      <GridCenter texto="Nuestro Equipo" />
      <GridCenter texto="Para dirigir una empresa Exitosa se necesita un equipo Excepcional" />
      <CardsImage />
      <GridCenter />
      <FooterLogo />
      <FooterLinks />
      <GridCenter />
    </div>
  );
};

export default Nosotros;
