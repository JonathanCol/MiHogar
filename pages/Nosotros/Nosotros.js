import React from "react";

import Layout from "../../components/Layout/layout";
import GridCenter from "../../components/GridCenter/GridCenter";
import GridValores from "../../components/GridValores/GridValores";
import CardsImage from "../../components/CardsImage";
const Nosotros = () => {
  return (
    <div>
      <Layout />
      <GridCenter texto="Mi Hogar" />
      <GridValores />
      <GridCenter />
      <GridCenter texto="Nuestro Equipo" />
      <GridCenter texto="Para dirigir una empresa Existosa se necesita un equipo Excepecional" />
      <CardsImage />
    </div>
  );
};

export default Nosotros;
