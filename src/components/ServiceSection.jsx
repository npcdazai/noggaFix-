import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import img from "../assets/banner.png";
import uparrow from "../assets/uparrow.png";
import service from "../assets/service.png";
import { NavLink } from "react-router-dom";
import CustomButton from "../components/ui/Button";
import { commonStyles } from "../styles/commonStyles";

const servicesData = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "Transforming concepts into captivating mobile experiences with our expert app development services.",
    image: img,
    buttonText: "Let’s build an App",
    buttonLink: "/mobile-app",
  },
  {
    id: 2,
    title: "Hybrid App Development",
    description:
      "Building versatile apps that work across platforms to ensure a seamless user experience.",
    image: service,
  },
  {
    id: 3,
    title: "iOS App Development",
    description:
      "Creating high-quality iOS applications tailored to your needs.",
    image: service,
  },
  {
    id: 4,
    title: "Android App Development",
    description:
      "Developing responsive Android applications to reach a wider audience.",
    image: service,
  },
  {
    id: 5,
    title: "AI/ML Applications",
    description:
      "Leveraging AI and ML to build intelligent and predictive mobile applications.",
    image: service,
  },
];

const ServiceSection = () => {
  return (
    <Container
      maxW="container.2xl"
      bgColor="black"
      p={"3rem"}
      display="flex"
      alignItems="center"
      gap={5}
      flexDirection="column"
    >
      <Heading fontSize="30px" fontWeight={600} color="white" pb={8}>
        What do we do exactly?
      </Heading>
      <Box display="flex" justifyContent="space-between" h="100%" gap={4}>
        {servicesData.slice(0, 1).map((service) => (
          <Box
            key={service.id}
            display="flex"
            w="70%"
            justifyContent="space-between"
            alignItems="center"
            bgColor="#0F0F0F"
            gap={5}
            {...commonStyles}
            borderRadius="9px"
          >
            <Box
              w="50%"
              display="flex"
              flexDirection="column"
              h="283px"
              p={8}
              gap={2}
            >
              <Heading color="#fff" fontWeight={600}>
                {service.title}
              </Heading>
              <Text color="#C4C4C4">{service.description}</Text>
              {service.buttonText && (
                <NavLink to={service.buttonLink}>
                  <CustomButton Context={service.buttonText} />
                </NavLink>
              )}
            </Box>
            <Image src={service.image} h="261.15px" w="347.55px" />
          </Box>
        ))}
        <Box
          display="flex"
          bgColor="#0F0F0F"
          w="30%"
          h={"290px"}
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box p={8}>
            <Image src={servicesData[1].image} w="48px" h={"37.41px"}/>
          </Box>
          <Box
              w="100%"
              display="flex"
              flexDirection="column"
              h="283px"
              px={8}
              gap={4}
              {...commonStyles}
              borderRadius="9px"
          >
            <Heading color="#fff" fontWeight={600}>
              {servicesData[1].title}
            </Heading>
            <Text color="#C4C4C4">{servicesData[1].description}</Text>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
      >
        {servicesData.slice(2).map((service) => (
          <Box
            key={service.id}
            display="flex"
            bgColor="#0F0F0F"
            w="40%"
            h={"270px"}
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
            {...commonStyles}
            borderRadius="9px"
          >
            <Box p={8}>
              <Image src={service.image} w="48px" h={"37.41px"} />
            </Box>
            <Box
              w="100%"
              display="flex"
              flexDirection="column"
              h="100%"
              px={8}
              gap={6}
              {...commonStyles}
            >
              <Heading
                w="216px"
                color="#fff"
                fontWeight={600}
                fontSize="25px"
                lineHeight="25px"
              >
                {service.title}
              </Heading>
              <Text
                fontSize="18px"
                fontWeight={400}
                lineHeight="22.87px"
                color="#C4C4C4"
              >
                {service.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ServiceSection;
