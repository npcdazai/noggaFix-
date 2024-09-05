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
import tsx from "../../assets/typescript.png";

const techStack = [
  { name: "HTML", image: htmlpng },
  { name: "React", image: reactjs },
  { name: "CodeIgniter", image: codeIgniter },
  { name: "Java", image: java },
  { name: "Angular", image: angular },
  { name: "Vue", image: vue },
];

const backEnd = [
  { name: "lavarel", image: lavarel },
  { name: "node", image: nodejs },
  { name: "Code Igniter", image: codeIgniter },
  { name: "Java", image: java },
  { name: "Angular", image: angular },
  { name: "Vue", image: vue },
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
      px={{ base: "1rem", md: "2rem" }} 
          >
      <Heading color="#ACACAC" fontWeight={500} fontSize="18px" mt="1rem">
        Front-End
      </Heading>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Box
          display="flex"
          flexDirection={{ base: "row", md: "row" }} // Stack items on mobile
          alignItems="center"
          justifyContent="center"
          gap={4}
          py="2rem"
          flexWrap="wrap" // Ensure wrapping on smaller screens
        >
          {techStack.slice(0, 2).map((tech) => (
            <Box
              key={tech.name}
              w={{ base: "110px", sm: "288px" }}
              h="99px"
              p="1rem"
              display="flex"
              bgColor="#0F0F0F"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              filter="grayscale(100%)"
              _hover={{ filter: "grayscale(0%)", bgColor: "#1F1F1F" }}
            >
              <Image src={tech.image} h="30px" />
              <Text fontSize="14px" fontWeight={400} color="#FFFFFF">
                {tech.name}
              </Text>
            </Box>
          ))}
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "row", md: "row" }}
          alignItems="center"
          justifyContent="center"
          gap={4}
          flexWrap="wrap"
        >
          {techStack.slice(2).map((tech) => (
            <Box
            key={tech.name}
            w={{ base: "110px", sm: "288px" }}
            h="99px"
            p="10px"
            display="flex"
            bgColor="#0F0F0F"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            filter="grayscale(100%)"
            _hover={{ filter: "grayscale(0%)", bgColor: "#1F1F1F" }}
          >
            <Image src={tech.image} h="30px" />
            <Text fontSize="14px" fontWeight={400} color="#FFFFFF">
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
          display="flex"
          flexDirection={{ base: "row", md: "row" }}
          alignItems="center"
          justifyContent="center"
          gap={4}
          py="2rem"
          flexWrap="wrap"
        >
          {backEnd.slice(0, 2).map((tech) => (
             <Box
             key={tech.name}
             w={{ base: "110px", sm: "288px" }}
             h="99px"
             p="1rem"
             display="flex"
             bgColor="#0F0F0F"
             flexDirection="row"
             justifyContent="space-between"
             alignItems="center"
             filter="grayscale(100%)"
             _hover={{ filter: "grayscale(0%)", bgColor: "#1F1F1F" }}
           >
             <Image src={tech.image} h="30px" />
             <Text fontSize="14px" fontWeight={400} color="#FFFFFF">
               {tech.name}
             </Text>
           </Box>
          ))}
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "row", md: "row" }}
          alignItems="center"
          justifyContent="center"
          gap={4}
          flexWrap="wrap"
        >
          {backEnd.slice(2).map((tech) => (
            <Box
            key={tech.name}
            w={{ base: "110px", sm: "288px" }}
            h="99px"
            p="1rem"
            display="flex"
            bgColor="#0F0F0F"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            filter="grayscale(100%)"
            _hover={{ filter: "grayscale(0%)", bgColor: "#1F1F1F" }}
          >
            <Image src={tech.image} h="30px" />
            <Text fontSize="14px" fontWeight={400} color="#FFFFFF">
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
