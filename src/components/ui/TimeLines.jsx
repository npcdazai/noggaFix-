import {
  Box,
  Circle,
  Container,
  Flex,
  Image,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Tabs from "../ui/Tabs";
import LineBar from "../../assets/pointerBar.png";
import lineBar from "../../assets/imgpsh_fullsize_anim.png";

const timelineData = [
  { date: "Oct 12, 2023", phase: "Phase 1", description: "Lorem ipsum" },
  { date: "Oct 12, 2024", phase: "Phase 2", description: "Lorem ipsum" },
];

const TimeLines = () => {
  return (
    <Container
      display={{ base: "none", lg: "block" }}
      maxW="container.2xl"
      bgColor="black"
      px="2.8rem"
      w="100%"
      h="100%"
    >
      <Box
        bgColor="#D9D9D91A"
        display="flex"
        flexDirection="column"
        alignItems="center"
        borderRadius="20px"
        p={4}
      >
        <Text
          fontWeight={500}
          fontSize="28px"
          lineHeight="37.71px"
          color="#fff"
        >
          We Walk the Walk
        </Text>
        <Tabs />
      </Box>
    </Container>
  );
};

export default TimeLines;
