import { Container, Flex, Image, Box, Text } from "@chakra-ui/react";
import React from "react";
import LineBar from "../../assets/imgpsh_fullsize_anim.png";
const data = [
  { id: 1, phase: "Strategy and Planning", date: "Oct 2023 - Nov 2023" },
  { id: 2, phase: "App Development", date: "Dec 2023 - Feb 2023" },
  { id: 5, phase: "Support and Maintenance", date: "April 2024 - Ongoing" },
  { id: 4, phase: "Product Design", date: " Nov 2023 - Dec 2023" },
  { id: 3, phase: "Testing and Deployment", date: "Feb 2024 - March 2024" },
];

const Timeline = () => {
  return (
    <Box w="100%" color="white">
      <Flex position="relative" justify="space-between" align="center">
        {data.slice(0, 3).map((item) => (
          <Box key={item.id} textAlign="center">
            <Box
              px={5}
              py={3}
              borderRadius="md"
              bg="transparent"
              _hover={{
                bg: "#E8155D21",
                outline: "1px solid #E5195E7A",
                cursor: "pointer",
              }}
            >
              <Text fontSize="lg">{item.phase}</Text>
              <Text fontSize="17.83px" mt={2}>
                {item.date}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
      <Box position="relative">
        <Image src={LineBar} h="100px" w="100%" />
        <Box px="5rem" position="absolute" top="3rem">
          <Box
            as="button"
            borderRadius="50%"
            w="8.34px"
            h="8.34px"
            bgColor="#E5195E"
          >
            <Box
              top="-2.8px"
              right="7px"
              as="button"
              borderRadius="50%"
              w="22.94px"
              h="22.94px"
              px="0"
              marginTop="-1rem"
              position="relative"
              bgColor="#E5195E42"
            />
          </Box>
        </Box>
      </Box>
      <Flex
        px={"7rem"}
        position="relative"
        justify="space-between"
        align="center"
      >
        {data.slice(3, 5).map((item) => (
          <Box key={item.id} textAlign="center">
            <Box
              px={5}
              py={3}
              borderRadius="md"
              bg="transparent"
              _hover={{
                bg: "#E8155D21",
                outline: "1px solid #E5195E7A",
                cursor: "pointer",
              }}
            >
              <Text fontSize="lg">{item.phase}</Text>
              <Text fontSize="md" mt={2}>
                {item.date}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Timeline;
