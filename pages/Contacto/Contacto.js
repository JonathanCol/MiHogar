import React from "react";


import Layout from "../../components/Layout/layout";
import ContactForm from "../../components/ContactForm";
import DivMargin from "../../components/DivMargin/DivMargin";
import GridCenter from "../../components/GridCenter/GridCenter";
import FooterLogo from "../../components/FooterLogo/FooterLogo";
import FooterLinks from "../../components/FooterLinks/FooterLinks";

const Contacto = () => {
  return (
    <div>
      <Layout />
      <DivMargin />
     <GridCenter texto="Comuniquese con nosotros" />
     <DivMargin />
     <ContactForm />
     <DivMargin />
     <FooterLogo />
    <FooterLinks />
    </div>
  )
}

export default Contacto
