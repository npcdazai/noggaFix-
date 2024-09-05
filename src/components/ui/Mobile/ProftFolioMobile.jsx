import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import qualityAssurance from "../../../assets/qualityAssurance.png";
import costEffective from "../../../assets/costEffective.png";
import Company from "../Mobile/CompanyMobile";
const PortFolio = () => {
  const portfolioItems = [
    {
      image: costEffective,
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
      image: costEffective,
      alt: "Quality Assurance",
      heading: "On-Time Delivery",
      text: "Quality Assurance (QA) is a systematic process ensuring that products or services meet specified standards. In software development, QA involves rigorous testing, continuous monitoring, and adherence to defined procedures.",
    },
    {
      image: costEffective,
      alt: "Quality Assurance",
      heading: "Excellent Customer Support",
      text: "Quality Assurance (QA) is a systematic process ensuring that products or services meet specified standards. In software development, QA involves rigorous testing, continuous monitoring, and adherence to defined procedures.",
    },
  ];

  return (
    <div>
      <Container
        maxW="container.xl"
        bgColor="black"
        display="flex"
        flexDirection="column"
        gap={3}
        px={["1rem", "2rem", "3rem"]}
      >
        <Heading
          textAlign="center"
          fontWeight={600}
          fontSize={["24px", "32px", "40px"]}
          color="#FBFBFB"
        >
          PortFolio
        </Heading>
        <Company />
        <Box p={["1rem", "1.5rem", "2rem"]} gap={4} bgColor="black" display="flex" flexDirection="column">
          <Box display="flex" flexDirection="column" gap={4}>
            <Heading fontWeight={600} fontSize={["24px", "32px", "40px"]} color="#FBFBFB">
              Inventing App For Superior Apps
            </Heading>
            <Text
              color="#F0F0F0"
              fontWeight={400}
              fontSize={["16px", "20px", "23px"]}
              lineHeight={["24px", "32px", "37.5px"]}
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
            flexDirection={["column", "row"]}
            justifyContent={["center", "space-evenly"]}
            gap={4}
            w="100%"
            flexWrap="wrap"
          >
            {portfolioItems.map((item, index) => (
              <Box
                key={index}
                p={["1rem", "2rem", "8"]}
                gap={3}
                w={["100%", "45%", "25%"]}
                h={["auto", "auto", "431.4px"]}
                bgColor="#292929"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                borderRadius="md"
              >
                <Image
                  src={item.image}
                  h={["50px", "60px", "77.19px"]}
                  w={["50px", "60px", "77.19px"]}
                  alt={item.alt}
                />
                <Heading
                  color="#FFFFFF"
                  fontWeight={600}
                  fontSize={["18px", "20px", "21.61px"]}
                >
                  {item.heading}
                </Heading>
                <Text
                  fontWeight={400}
                  fontSize={["14px", "16px", "16.82px"]}
                  color="#EBEBEB99"
                >
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

