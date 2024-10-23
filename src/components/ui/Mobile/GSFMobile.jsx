import { Container, Flex, Image, Box, Text } from "@chakra-ui/react";
import React from "react";
import LineBar from "../../../assets/imgpsh_fullsize_anim.png";

const data = [
  { id: 1, phase: "Strategy and Planning", date: "June 2023 - July 2023" },
  { id: 2, phase: "App Development", date: "August 2023 - September 2023" },
  { id: 5, phase: "Support and Maintenance", date: "December 2023 - Ongoing" },
  { id: 4, phase: "Product Design", date: "July 2023 - July 2023" },
  {
    id: 3,
    phase: "Testing and Deployment",
    date: "October 2023 - November 2023",
  },
];

const Timeline = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={1}
      alignItems="flex-start"
      w="100%"
      color="white"
    >
      {/* Upper Flex for the first 3 timeline items */}
      <Flex
        w="100%"
        position="relative"
        justify="space-between"
        align="center"
        flexDirection={{ base: "column", md: "row" }} // Stack on mobile
        gap={{ base: 4, md: 0 }} // Add gap on mobile
      >
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
              <Text fontSize={{ base: "md", md: "lg" }}>{item.phase}</Text>
              <Text fontSize="17.83px" mt={2}>
                {item.date}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>

      <Box
        w="100%"
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Image
          src={LineBar}
          h="100%"
          w="100%"
          transform={{ base: "rotate(90deg)", md: "rotate(0deg)" }} // Rotate on mobile
        />
        <Box
          px="5rem"
          position="absolute"
          top="0rem"
          display="flex"
          justifyContent="space-between"
          w="100%"
          gap={8}
          flexDirection="column" 
        >
          {Array(5)
            .fill("")
            .map((_, idx) => (
              <Box
                key={idx}
                as="button"
                borderRadius="50%"
                w="8.34px"
                h="8.34px"
                bgColor="#E5195E"
                marginBottom={{ base: "1rem", md: 0 }} // Add margin on mobile
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
            ))}
        </Box>
      </Box>

      {/* Lower Flex for the remaining 2 timeline items */}
      <Flex
        w="60%"
        position="relative"
        justify="space-between"
        align="center"
        flexDirection={{ base: "column", md: "row" }} // Stack on mobile
        gap={{ base: 4, md: 0 }} // Add gap on mobile
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
              <Text fontSize={{ base: "md", md: "lg" }}>{item.phase}</Text>
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
