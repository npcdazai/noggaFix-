import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import CompactTable from "../components/ui/compactTabs";
import htmlpng from "../assets/html.png";
import reactjs from "../assets/react.png";
import codeIgniter from "../assets/codeigniter.png";
import java from "../assets/java.png";
import anugular from "../assets/angular.png";
import vue from "../assets/vue.png";
const WhatWeTeach = () => {
  return (
    <Container
      display="flex"
      alignItems="center"
      maxW="container.2xl"
      flexDirection="column"
      bgColor="black"
      p={"2.9rem"}
      gap={3}
    >
      <Heading color="#FBFBFB" fontSize={"40px"} fontWeight={600}>
        What tech we use
      </Heading>
      <CompactTable />
      <Box borderBottom="1px solid #E0E0E0" w={"100%"} />
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
          <Box
            w="288px"
            h={"99px"}
            p={"1.4rem"}
            display={"flex"}
            bgColor="#0F0F0F"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image src={htmlpng} w="45.31px" h="50px" />
            <Text fontSize="16px" fontWeight={400} color="#FFFFFF">
              HTML
            </Text>
          </Box>
          <Box
            w="288px"
            h={"99px"}
            p={"1.4rem"}
            display={"flex"}
            bgColor="#0F0F0F"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image src={reactjs} w="45.31px" h="50px" />
            <Text fontSize="16px" fontWeight={400} color="#FFFFFF">
              React
            </Text>
          </Box>
          <Box
            w="288px"
            h={"99px"}
            p={"1.4rem"}
            display={"flex"}
            bgColor="#0F0F0F"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image src={codeIgniter} w="45.31px" h="50px" />
            <Text fontSize="16px" fontWeight={400} color="#FFFFFF">
              Code Igniter
            </Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
          <Box
            w="288px"
            h={"99px"}
            p={"1.4rem"}
            display={"flex"}
            bgColor="#0F0F0F"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image src={java} w="45.31px" h="50px" />
            <Text fontSize="16px" fontWeight={400} color="#FFFFFF">
              Java
            </Text>
          </Box>
          <Box
            w="288px"
            h={"99px"}
            p={"1.4rem"}
            display={"flex"}
            bgColor="#0F0F0F"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image src={anugular} w="45.31px" h="50px" />
            <Text fontSize="16px" fontWeight={400} color="#FFFFFF">
              Anugular
            </Text>
          </Box>
          <Box
            w="288px"
            h={"99px"}
            p={"1.4rem"}
            display={"flex"}
            bgColor="#0F0F0F"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image src={vue} w="45.31px" h="50px" />
            <Text fontSize="16px" fontWeight={400} color="#FFFFFF">
              vue
            </Text>
          </Box>
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
          <Box
            w="288px"
            h={"99px"}
            p={"1.4rem"}
            display={"flex"}
            bgColor="#0F0F0F"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image src={htmlpng} w="45.31px" h="50px" />
            <Text fontSize="16px" fontWeight={400} color="#FFFFFF">
              HTML
            </Text>
          </Box>
          <Box
            w="288px"
            h={"99px"}
            p={"1.4rem"}
            display={"flex"}
            bgColor="#0F0F0F"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image src={reactjs} w="45.31px" h="50px" />
            <Text fontSize="16px" fontWeight={400} color="#FFFFFF">
              React
            </Text>
          </Box>
          <Box
            w="288px"
            h={"99px"}
            p={"1.4rem"}
            display={"flex"}
            bgColor="#0F0F0F"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image src={codeIgniter} w="45.31px" h="50px" />
            <Text fontSize="16px" fontWeight={400} color="#FFFFFF">
              Code Igniter
            </Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
          <Box
            w="288px"
            h={"99px"}
            p={"1.4rem"}
            display={"flex"}
            bgColor="#0F0F0F"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image src={java} w="45.31px" h="50px" />
            <Text fontSize="16px" fontWeight={400} color="#FFFFFF">
              Java
            </Text>
          </Box>
          <Box
            w="288px"
            h={"99px"}
            p={"1.4rem"}
            display={"flex"}
            bgColor="#0F0F0F"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image src={anugular} w="45.31px" h="50px" />
            <Text fontSize="16px" fontWeight={400} color="#FFFFFF">
              Anugular
            </Text>
          </Box>
          <Box
            w="288px"
            h={"99px"}
            p={"1.4rem"}
            display={"flex"}
            bgColor="#0F0F0F"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image src={vue} w="45.31px" h="50px" />
            <Text fontSize="16px" fontWeight={400} color="#FFFFFF">
              vue
            </Text>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default WhatWeTeach;
