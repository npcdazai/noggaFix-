import {
  Box,
  Circle,
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
    <div>
      <Box bgColor="black" w="100%" px="4rem" h="100%">
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
          <Box
            w="100%"
            p={"4rem"}
            mt={"2rem"}
            display="flex"
            flexDirection="column"
          >
            {/* <Box
              borderBottom="1px solid #E8155DD6"
              w={"100%"}
              py={"1rem"}
            /> */}
            <Image w={"100%"} src={lineBar} />
            <Flex
              direction="row"
              w="100%"
              px="3rem"
              justify="space-between"
              align="center"
            >
              {timelineData.map((item, index) => (
                <Flex key={index} direction="column" align="center">
                  <Tooltip
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    bgColor="#E8155D21"
                    w="220.85px"
                    h="104.29px"
                    label={item.description}
                    placement="top"
                    px="8rem"
                  >
                    <Box
                      bottom="5rem"
                      as="button"
                      borderRadius="50%"
                      w="8.34px"
                      h="8.34px"
                      marginTop="-1rem"
                      position="relative"
                      mb="3rem"
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

                      <Box
                        display="flex"
                        w="220.85px"
                        h="104.29px"
                        flexDirection="row"
                        position="relative"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box display="flex" flexDirection="column" alignItems="center" mr="8rem">
                          <Text fontSize="sm" color="white">
                            {item.date}
                          </Text>
                          <Text fontSize="xs" color="white">
                            {item.phase}
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                  </Tooltip>
                </Flex>
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default TimeLines;
