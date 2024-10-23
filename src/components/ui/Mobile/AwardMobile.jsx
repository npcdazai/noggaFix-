import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import health from "../../../assets/health.png";
import clucth from "../../../assets/clutch.png";
import mad from "../../../assets/mad.png";
import wdi from "../../../assets/wdi.png";

const awardsData = [
  {
    id: 1,
    title: "Top health and wellness app developers Mumbai",
    year: 2022,
    image: health,
  },
  {
    id: 2,
    title: "Top Web Development Company 2023",
    year: 2022,
    image: clucth,
  },
  {
    id: 3,
    title: "Top Web Development Company 2023",
    year: 2022,
    image: mad,
  },
  {
    id: 4,
    title: "Top Web Development Company 2023",
    year: 2022,
    image: wdi,
  },
];

const Awards = () => {
  return (
    <Container
      bgColor="#050505"
      p={{ base: "1rem", md: "2rem" }} // Adjust padding for mobile and larger screens
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={8}
      maxW="container.2xl"
    >
      <Heading
        color="#FBFBFB"
        fontWeight={600}
        fontSize={{ base: "28px", md: "40px" }} // Responsive font size
        textAlign="center"
      >
        Awards & Recognition
      </Heading>
      <Text
        textAlign="center"
        color="#FFFFFF"
        lineHeight={{ base: "24px", md: "37.5px" }} // Responsive line height
        fontSize={{ base: "18px", md: "24px" }} // Responsive font size
        fontWeight={400}
      >
        Our talented team of developers, designers, and engineers has
        consistently demonstrated a dedication to pushing the boundaries of what
        is possible in the digital landscape. From prestigious industry awards
        to client testimonials, this section reflects the tangible impact of our
        work.
      </Text>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }} // Stack vertically on mobile, horizontally on larger screens
        alignItems="center"
        px={{ base: "0", md: "1.9rem" }} // Adjust padding for mobile and larger screens
        gap={{ base: 4, md: 8 }} // Adjust gap between items for mobile and larger screens
      >
        {awardsData.map((award) => (
          <Box
            key={award.id}
            display="flex"
            flexDirection="column"
            alignItems="center"
            w={{ base: "100%", md: "30%" }} // Full width on mobile, 30% on larger screens
            gap={4}
            px={{ base: "1rem", md: "2rem" }} // Adjust padding for mobile and larger screens
          >
            <Image src={award.image} w="204.47px" h="127px" />
            <Text
              color="#FFFFFF"
              fontWeight={400}
              fontSize={{ base: "16px", md: "18px" }} // Responsive font size
              textAlign="center"
            >
              {award.title}
            </Text>
            <Text
              color="#FFFFFF"
              fontWeight="400"
              fontSize={{ base: "18px", md: "20px" }} // Responsive font size
            >
              {award.year}
            </Text>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Awards;
