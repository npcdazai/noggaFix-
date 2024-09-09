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
// import TimeLinesMobile from "../components/ui/Mobile/TimrLinesMobile";
import ServiceMobile from "../components/ui/Mobile/ServiceMobile";
import PortFolioMobile from "../components/ui/Mobile/ProftFolioMobile";
import TechMobile from "../components/ui/Mobile/Tech";
import TestiMobile from "../components/ui/Mobile/TestinomalMobile";
import BannerMobile from "../components/ui/Mobile/BannerMobile";
import FormMobile from "../components/ui/Mobile/FormMobile";
import FAQMobile from "../components/ui/Mobile/FQAMobile";
import FooterMobile from "../components/ui/Mobile/FooterMobile";
import FooterComMobile from "../components/ui/Mobile/FooterComMobile"

const Home = () => {
  const heroComponent = useBreakpointValue({
    base: <HeroMobile />,
    lg: <Hero />,
  });

  const service = useBreakpointValue({
    base: <ServiceMobile />,
    lg: <ServicesSection />,
  });

  const PortFolio = useBreakpointValue({
    base: <PortFolioMobile />,
    lg: <Protfolio />,
  });

  const Tech = useBreakpointValue({
    base: <TechMobile />,
    lg: <Teach />,
  });

  const testinomal = useBreakpointValue({
    base: <TestiMobile />,
    lg: <Testi />,
  });

  const banner = useBreakpointValue({
    base: <BannerMobile />,
    lg: <Banner />,
  });

  const form = useBreakpointValue({
    base: <FormMobile />,
    lg: <Form />,
  });

  const faq = useBreakpointValue({
    base: <FAQMobile />,
    lg: <FAQs />,
  });

  const footer = useBreakpointValue({
    base: <FooterMobile />,
    lg: <Footer />,
  });

  const footercom = useBreakpointValue({
    base: <FooterComMobile />,
    lg: <FooterCom />,
  })

  return (
    <>
      {heroComponent}
      <TimeLines />
      {service}
      {/* <Protfolio /> */}
      {PortFolio}
      {/* <Teach /> */}
      {Tech}
      {/* <Testi /> */}
      {testinomal}
      <Awards />
      {/* <Banner /> */}
      {banner}
      {/* <Form /> */}
      {form}
      {/* <FAQs/> */}
      {faq}
      {footer}
      {footercom}
      {/* <Footer /> */}
      {/* <FooterCom /> */}
    </>
  );
};

export default Home;
