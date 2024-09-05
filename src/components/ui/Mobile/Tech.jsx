import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import CompactTable from "../Mobile/Tabs";

const WhatWeTeach = () => {
  return (
    <Container
      display="flex"
      alignItems="center"
      maxW="container.xl"
      flexDirection="column"
      bgColor="black"
      p={["1rem", "1.5rem", "2.9rem"]}
      gap={3}
    >
      <Heading
        color="#FBFBFB"
        fontSize={["24px",  "32px", "40px"]}
        fontWeight={600}
        textAlign="center"
      >
        What tech we use
      </Heading>
      <Box w="100%" overflowX="auto">
        <CompactTable />
      </Box>
    </Container>
  );
};

export default WhatWeTeach;