import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import htmlpng from "../../assets/html.png";
import reactjs from "../../assets/react.png";
import codeIgniter from "../../assets/codeigniter.png";
import java from "../../assets/java.png";
import angular from "../../assets/anugular.png";
import vue from "../../assets/vue.png";
import lavarel from "../../assets/lavarel.png";
import nodejs from "../../assets/nodejs.png";
import fluter from "../../assets/fluter.png";
import reactNative from "../../assets/reactNative.png";
const techStack = [
  // { name: "HTML", image: htmlpng },
  // { name: "React", image: reactjs },
  // { name: "Code Igniter", image: codeIgniter },
  // { name: "Java", image: java },
  // { name: "Angular", image: angular },
  // { name: "Vue", image: vue },
  { name: "React Native", image: reactNative },
  { name: "Fluter", image: fluter },
];

const backEnd = [
  // { name: "lavarel", image: lavarel },
  // { name: "node", image: nodejs },

  { name: "Java", image: java },
  // { name: "Angular", image: angular },
  // { name: "Vue", image: vue },
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
          {techStack.slice(0, 3).map((tech) => (
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
              _hover={{
                filter: "grayscale(0%)",
                bgColor: "#1F1F1F",
                transform: "translateY(-5px)",
                transitionDuration: "0.4s",
                transitionTimingFunction: "ease-in-out",
              }}
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
          {techStack.slice(3).map((tech) => (
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
              _hover={{
                filter: "grayscale(0%)",
                bgColor: "#1F1F1F",
                transform: "translateY(-5px)",
                transitionDuration: "0.4s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={tech.image} w="45.31px" h="50px" />
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
          {backEnd.slice(0, 3).map((tech) => (
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
              _hover={{
                filter: "grayscale(0%)",
                bgColor: "#1F1F1F",
                transform: "translateY(-5px)",
                transitionDuration: "0.4s",
                transitionTimingFunction: "ease-in-out",
              }}
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
          {backEnd.slice(3).map((tech) => (
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
