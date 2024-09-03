import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import banner from "../assets/images/banner.png";
import whiteCircle from "../assets/white.png";
import pinkCircle from "../assets/pink.png";

const circlesData = [
  { id: 1, image: whiteCircle },
  { id: 2, image: pinkCircle },
  { id: 3, image: whiteCircle },
  { id: 4, image: pinkCircle },
];

const Hero = () => {
  return (
      <Box bgColor="black" h="100%" width={["25%", "50%", "100%"]} >
        <Flex
          justifyContent="space-between"
          spacing={4}
          alignItems="center"
          px={"4.4rem"}
          py={"5rem"}
        >
          <HStack wrap="wrap" w={"60%"} gap={"2rem"}>
            <Heading
              color="#e8155d"
              lineHeight="40.88px"
              fontWeight={600}
              fontSize="40px"
              flexDirection={{base:"column" , lg:"row"}}
            >
              Develop AI-Powered solutions with the leading mobile
            </Heading>
            <Text
              color="#FFFFFF"
              fontWeight={400}
              fontSize="22px"
              lineHeight="23.63px"
            >
              Develop AI-Powered solutions with the leading mobile solutions
              with the leading mobile
            </Text>
            <Box
              w={"100%"}
              display="flex"
              flexDirection="row"
              position="relative"
              alignItems="center"
            >
              {circlesData.map((circle, index) => (
                <Box
                  key={circle.id}
                  position="relative"
                  display="flex"
                  alignItems="center"
                  w={"158.06px"}
                  h="158.06px"
                  right={{
                    base: `${index * 4}px`,
                    md: `${index * 8}px`, 
                    lg: `${index * 12}px`,
                  }}
                >
                  <Image
                    src={circle.image}
                    w={"158.06px"}
                    h={"158.06px"}
                    left={"0px"}
                    position="relative"
                  />
                  <Box
                    textAlign="center"
                    color="#e8155d"
                    position="absolute"
                    left="30px"
                  >
                    <Text fontSize="26px" fontWeight="600">
                      200+
                    </Text>
                    <br />
                    <Text color="white" fontSize="16px" fontWeight="500">
                      Happy Client
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </HStack>
          <Box>
            <Image src={banner} h="300px" w="326px" />
          </Box>
        </Flex>
      </Box>
  );
};

export default Hero;
