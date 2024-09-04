import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
// import React from "react";
import img from "../../../assets/banner.png";
import service from "../../../assets/service.png";
import { NavLink } from "react-router-dom";
import CustomButton from "../Button";
import { commonStyles } from "../../../styles/commonStyles";

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
      bgColor="black"
      p={["2rem", "4rem"]}
      display="flex"
      alignItems="center"
      gap={[3, 5]}
      flexDirection="column"
      maxW="container.2xl"
    >
      <Heading
        fontSize={["20px", "30px"]}
        fontWeight={600}
        color="white"
        pb={[4, 8]}
      >
        What do we do exactly?
      </Heading>
      <Box
        display="flex"
        flexDirection={["column", "row"]}
        justifyContent="space-between"
        h="100%"
        gap={[3, 4]}
      >
        {servicesData.slice(0, 1).map((service) => (
          <Box
            key={service.id}
            display="flex"
            flexDirection={["column", "row"]}
            w={["100%", "70%"]}
            h="100%"
            justifyContent="space-between"
            alignItems="center"
            bgColor="#0F0F0F"
            gap={[3, 5]}
            {...commonStyles}
            borderRadius="9px"
          >
            <Box
              w={["100%", "50%"]}
              display="flex"
              flexDirection="column"
              h="100%"
              p={[4, 8]}
              gap={[2, 4]}
            >
              <Heading
                color="#fff"
                fontWeight={600}
                fontSize={["18px", "24px"]}
              >
                {service.title}
              </Heading>
              <Text color="#C4C4C4" fontSize={["14px", "16px"]}>
                {service.description}
              </Text>
              {service.buttonText && (
                <NavLink to={service.buttonLink}>
                  <CustomButton Context={service.buttonText} />
                </NavLink>
              )}
            </Box>
            <Image
              display={{ base: "none", lg: "block" }}
              src={service.image}
              h={["200px", "261.15px"]}
              w={["100%", "347.55px"]}
            />
          </Box>
        ))}
        <Box
          display="flex"
          flexDirection={["column", "column"]}
          bgColor="#0F0F0F"
          w={"100%"}
          h={"100%"}
          //   gap={1}
          justifyContent="space-between"
        >
          <Box p={[4, 8]}>
            <Image
              src={servicesData[1].image}
              w={["32px", "48px"]}
              h={["25px", "37.41px"]}
            />
          </Box>
          <Box
            w="100%"
            display="flex"
            flexDirection="column"
            h="100%"
            p={[4, 8]}
            gap={[2, 4]}
            {...commonStyles}
            borderRadius="9px"
          >
            <Heading color="#fff" fontWeight={600} fontSize={["18px", "24px"]}>
              {servicesData[1].title}
            </Heading>
            <Text color="#C4C4C4" fontSize={["14px", "16px"]}>
              {servicesData[1].description}
            </Text>
          </Box>
        </Box>
      </Box>
      {/* <Box
        display="flex"
        flexDirection={["column", "row"]}
        justifyContent="space-between"
        alignItems="center"
        h="100%"
        p={[4, 8]}
        gap={[2, 4]}
      > */}
      {servicesData.slice(2).map((service) => (
        <Box
          key={service.id}
          display="flex"
          flexDirection="column"
          bgColor="#0F0F0F"
          w={"100%"}
          h="100%"
          justifyContent="space-between"
          alignItems="flex-start"
          {...commonStyles}
          borderRadius="9px"
          mb={[4, 0]}
          py={4}
        >
          <Box p={[4, 8]}>
            <Image src={service.image} w={["32px", "48px"]} h={"100%"} />
          </Box>
          <Box
            w="100%"
            display="flex"
            flexDirection="column"
            h="100%"
            px={[4, 8]}
            gap={[2, 3]}
          >
            <Heading
              w={["100%", "216px"]}
              color="#fff"
              fontWeight={600}
              fontSize={["18px", "24px"]}
            >
              {service.title}
            </Heading>
            <Text color="#C4C4C4" fontSize={["14px", "16px"]}>
              {service.description}
            </Text>
          </Box>
        </Box>
      ))}
      {/* </Box> */}
    </Container>
  );
};

export default ServiceSection;
