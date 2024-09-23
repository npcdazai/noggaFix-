import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import fluter from "../../assets/fluter.png";
import ios from "../../assets/ios.png";
import swift from "../../assets/swifty.png";
import reactNative from "../../assets/reactNative.png";
import kotlin from "../../assets/kotlin.png";
import lavarel from "../../assets/lavarel.png";
import nodejs from "../../assets/nodejs.png";
import java from "../../assets/java.png";
import python from "../../assets/phython.png";
const techStack = [
  { name: "Kotlin", image: kotlin },
  { name: "React Native", image: reactNative },
  { name: "Fluter", image: fluter },
];
const backend = [
  { name: "java", image: java },
  { name: "lavarel", image: lavarel },
  // { name: "java", image: java },
  { name: "node js", image: nodejs },
  { name: "python", image: python },
];

const Hybrid = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      w="100%"
      flexDirection="column"
      bgColor="black"
      gap={3}
    >
      <Heading color="#ACACAC" fontWeight={500} fontSize="18px" mt="1rem">
        Front-End
      </Heading>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Box
          display={"flex"}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap={4}
          py="2rem"
        >
          {techStack.slice(0, 2).map((tech) => (
            <Box
              key={tech.name}
              w="288px"
              h={"99px"}
              p={"1.4rem"}
              display={"flex"}
              bgColor="#0F0F0F"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              filter="grayscale(100%)"
              _hover={{ filter: "grayscale(0%)", bgColor: "#1F1F1F" }}
            >
              <Image src={tech.image} h="50px" />
              <Text fontSize="16px" fontWeight={400} color="#FFFFFF">
                {tech.name}
              </Text>
            </Box>
          ))}
        </Box>
        <Box
          display={"flex"}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
          {techStack.slice(2).map((tech) => (
            <Box
              key={tech.name}
              w="288px"
              h={"99px"}
              p={"1.4rem"}
              display={"flex"}
              bgColor="#0F0F0F"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              filter="grayscale(100%)"
              _hover={{ filter: "grayscale(0%)", bgColor: "#1F1F1F" }}
            >
              <Image src={tech.image} h="50px" />
              <Text fontSize="16px" fontWeight={400} color="#FFFFFF">
                {tech.name}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>

      <Heading color="#ACACAC" fontWeight={500} fontSize="18px" mt="1rem">
        Back-End
      </Heading>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Box
          display={"flex"}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap={4}
          py="2rem"
        >
          {backend.slice(0, 2).map((tech) => (
            <Box
              key={tech.name}
              w="288px"
              h={"99px"}
              p={"1.4rem"}
              display={"flex"}
              bgColor="#0F0F0F"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              filter="grayscale(100%)"
              _hover={{ filter: "grayscale(0%)", bgColor: "#1F1F1F" }}
            >
              <Image src={tech.image} w="45.31px" h="50px" />
              <Text fontSize="16px" fontWeight={400} color="#FFFFFF">
                {tech.name}
              </Text>
            </Box>
          ))}
        </Box>
        <Box
          display={"flex"}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
          {backend.slice(2).map((tech) => (
            <Box
              key={tech.name}
              w="288px"
              h={"99px"}
              p={"1.4rem"}
              display={"flex"}
              bgColor="#0F0F0F"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              filter="grayscale(100%)"
              _hover={{ filter: "grayscale(0%)", bgColor: "#1F1F1F" }}
            >
              <Image src={tech.image} w="45.31px" h="50px" />
              <Text fontSize="16px" fontWeight={400} color="#FFFFFF">
                {tech.name}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Hybrid;
