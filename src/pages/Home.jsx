import React from "react"; // Ensure React is imported
import Hero from "../components/Hero";
import TimeLines from "../components/ui/TimeLines";
import ServicesSection from "../components/ServiceSection";
import Protfolio from "../components/PortFolio";
import Teach from "../components/WhatWeTeach";
import Awards from "../components/Awards";
import Testi from "../components/Testinomals";
import Banner from "../components/Banner";
import Form from "../components/Form";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import FooterCom from "../components/FooterCom";
import { useBreakpointValue } from "@chakra-ui/react";
import HeroMobile from "../components/ui/Mobile/HeroMobile";

const Home = () => {
  const heroComponent = useBreakpointValue({
    base: <HeroMobile />,
    lg: <Hero />,
  });

  return (
    <>
      {heroComponent}
      <TimeLines />
      <ServicesSection />
      <Protfolio />
      <Teach />
      <Testi />
      <Awards />
      <Banner />
      <Form />
      <FAQs />
      <Footer />
      <FooterCom />
    </>
  );
};

export default Home;
