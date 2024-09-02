import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import health from "../assets/health.png";
import clucth from "../assets/clutch.png";
import mad from "../assets/mad.png";
import wdi from "../assets/wdi.png";
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
    title: "TTop Web Development Company 2023",
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
    <Box
      bgColor="#050505"
      p="4rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={8}
      w="100%"
    >
      <Heading
        color="#FBFBFB"
        fontWeight={600}
        fontSize="40px"
        textAlign="center"
      >
        Awards & Recognition
      </Heading>
      <Text
        textAlign="center"
        color="#FFFFFF"
        lineHeight="37.5px"
        fontSize="24px"
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
        flexDirection="row"
        alignItems="center"
        px="1.9rem"
        gap={8}
      >
        {awardsData.map((award) => (
          <Box
            key={award.id}
            display="flex"
            flexDirection="column"
            alignItems="center"
            w="30%"
            gap={4}
            px="2rem"
          >
            <Image src={award.image} w="204.47px" h="127px" />
            <Text
              color="#FFFFFF"
              fontWeight={400}
              fontSize="18px"
              textAlign="center"
            >
              {award.title}
            </Text>
            <Text color="#FFFFFF" fontWeight="400" fontSize="20px">
              {award.year}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Awards;
