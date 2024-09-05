import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import aiml from "../../assets/aiml.png";
import tensorflow from "../../assets/tensorflow.png";
import scikit from "../../assets/scikit.png";
import tableau from "../../assets/tableau.png";
import machineLearning from "../../assets/machineLearning.png";
import nodejs from "../../assets/nodejs.png";
import java from "../../assets/java.png";
import python from "../../assets/phython.png";
const techStack = [
  { name: "AI/ML", image: aiml },
  { name: "Tensorflow", image: tensorflow },
  { name: "Scikit", image: scikit },
  { name: "Tableau", image: tableau },
  { name: "Machine Learning", image: machineLearning },
];
const backend = [
  { name: "java", image: java },
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
