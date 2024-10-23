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
      display={"flex"}
      flexDirection="column"
      gap={4}
      alignItems="center"
      w="100%"
      color="white"
    >
      <Flex
        w="100%"
        position="relative"
        justify={{ base: "center", md: "space-between" }}
        flexDirection={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        gap={{ base: 2, md: 0 }}
      >
        {data.slice(0, 3).map((item) => (
          <Box key={item.id} textAlign="center" w={{ base: "90%", md: "auto" }}>
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
              <Text fontSize={{ base: "sm", md: "17.83px" }} mt={2}>
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
        <Image src={LineBar} h="80px" w="100%" />
        <Box
          px={{ base: "1rem", md: "5rem" }}
          position="absolute"
          top={{ base: "2rem", md: "3rem" }}
          display={"flex"}
          justifyContent="space-between"
          w="100%"
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <Box
                key={index}
                as="button"
                borderRadius="50%"
                w="6px"
                h="6px"
                bgColor="#E5195E"
              >
                <Box
                  as="button"
                  borderRadius="50%"
                  w="18px"
                  h="18px"
                  position="relative"
                  marginTop="-1rem"
                  bgColor="#E5195E42"
                />
              </Box>
            ))}
        </Box>
      </Box>

      {/* Bottom Timeline Phases */}
      <Flex
        w="100%"
        position="relative"
        justify={{ base: "center", md: "space-between" }}
        flexDirection={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        gap={{ base: 2, md: 0 }}
      >
        {data.slice(3, 5).map((item) => (
          <Box key={item.id} textAlign="center" w={{ base: "90%", md: "auto" }}>
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
              <Text fontSize={{ base: "sm", md: "md" }} mt={2}>
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
