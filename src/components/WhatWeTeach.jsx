import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import CompactTable from "../components/ui/compactTabs";

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
   
    </Container>
  );
};

export default WhatWeTeach;
