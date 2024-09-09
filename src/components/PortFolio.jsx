import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import qualityAssurance from "../assets/qualityAssurance.png";
import costEffective from "../assets/costEffective.png";
import time from "../assets/Ontime.png";
import support from "../assets/support.png";
import Company from "./Companys";

const PortFolio = () => {
  const portfolioItems = [
    {
      image: qualityAssurance,
      alt: "Quality Assurance",
      heading: "Cost-Effective Solutions",
      text: "Quality Assurance (QA) is a systematic process ensuring that products or services meet specified standards. In software development, QA involves rigorous testing, continuous monitoring, and adherence to defined procedures.",
    },
    {
      image: costEffective,
      alt: "Quality Assurance",
      heading: "On-Time Delivery",
      text: "Quality Assurance (QA) is a systematic process ensuring that products or services meet specified standards. In software development, QA involves rigorous testing, continuous monitoring, and adherence to defined procedures.",
    },
    {
      image: time,
      alt: "Quality Assurance",
      heading: "On-Time Delivery",
      text: "Quality Assurance (QA) is a systematic process ensuring that products or services meet specified standards. In software development, QA involves rigorous testing, continuous monitoring, and adherence to defined procedures.",
    },
    {
      image: support,
      alt: "Quality Assurance",
      heading: "Excellent Customer Support",
      text: "Quality Assurance (QA) is a systematic process ensuring that products or services meet specified standards. In software development, QA involves rigorous testing, continuous monitoring, and adherence to defined procedures.",
    },
  ];

  return (
    <div>
      <Container maxW="container.2xl" bgColor="black" display="flex" flexDirection="column" gap={3}>
        <Heading
          textAlign="center"
          fontWeight={600}
          fontSize="40px"
          color="#FBFBFB"
        >
          PortFolio
        </Heading>
        <Company />
        <Box p="2rem" gap={4} bgColor="black" display="flex" flexDirection="column">
          <Box display="flex" flexDirection="column" gap={4} >

            <Heading fontWeight={600} fontSize="40px" color="#FBFBFB">
              Inventing App For Superior Apps
            </Heading>
            <Text
              color="#F0F0F0"
              fontWeight={400}
              fontSize="23px"
              lineHeight="37.5px"
            >
              Software developers can create tailored solutions that align with
              the specific needs and goals of the company. Whether it's a
              customized application, website, or internal software, developers
              can craft solutions that streamline processes and enhance
              efficiency.
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            gap={2}
            w="100%"
          >
            {portfolioItems.map((item, index) => (
              <Box
                key={index}
                p={8}
                gap={3}
                w="25%"
                h="431.4px"
                bgColor="#292929"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Image
                  src={item.image}
                  h="77.19px"
                  w="77.19px"
                  alt={item.alt}
                />
                <Heading color="#FFFFFF" fontWeight={600} fontSize="21.61px">
                  {item.heading}
                </Heading>
                <Text fontWeight={400} fontSize="16.82px" color="#EBEBEB99">
                  {item.text}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </div>
  );
};
export default PortFolio;
