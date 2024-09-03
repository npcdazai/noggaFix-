import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import banner from "../../../assets/images/banner.png";
import whiteCircle from "../../../assets/white.png";
import pinkCircle from "../../../assets/pink.png";

const circlesData = [
  { id: 1, image: whiteCircle },
  { id: 2, image: pinkCircle },
  { id: 3, image: whiteCircle },
  { id: 4, image: pinkCircle },
];

const Hero = () => {
  return (
    <Box bgColor="black" h="100%" w="100vw" display="flex" flexDirection="column" alignItems="center">
      <Flex
        flexDirection="column"
        alignItems="center"
        px={{ base: "sm", md:"md"}}
        py="2rem"
      >
        <Box mb={{ base: "1rem", md: "2rem" }}> {/* Add margin for spacing */}
          <Image src={banner} h={{ base: "150px", md: "200px" }} w={{ base: "170px", md: "226px" }} />
        </Box>
        <Flex 
          direction={{ base: "column", md: "row" }} // Stack in column on mobile, row on larger screens
          wrap="wrap"
          w="100%"
          gap={{ base: "5px", md: "2rem" }} // Adjust gap for mobile view
          alignItems="center"
          textAlign={{ base: "center", md: "center" }} // Center text on mobile
        >
          <Heading
            color="#e8155d"
            lineHeight="25px"
            fontWeight={500}
            fontSize={{ base: "md", md: "lg" }} // Adjust font size for mobile view
            flexDirection="column"
          >
            Develop AI-Powered solutions with the leading mobile
          </Heading>
          <Text
            color="#FFFFFF"
            fontWeight={400}
            fontSize={{ base: "xs", md: "md" }} // Adjust font size for mobile view
            lineHeight="23.63px"
          >
            Develop AI-Powered solutions with the leading mobile solutions with
            the leading mobile
          </Text>
        </Flex>
        <Box
          w="100%"
          display="flex"
          flexDirection={{ base: "row", md: "row" }} 
          alignItems="center"
          mt={{ base: "1rem", md: "2rem" }} 
          px={1}
        >
          {circlesData.map((circle, index) => (
            <Box
              key={circle.id}
              position="relative"
              display="flex"
              flexDirection="column" 
              alignItems="center"
              mb={{ base: "1rem", md: "0" }} 
              w={{base:"93px", md:"100.06px"}}
              h="100.06px"
              ml={{ base: `${index * -4}px`, md: `${index * -3}px` }} 
            >
              <Image
                src={circle.image}
                w="158.06px"
                h="158.06px"
              />
              <Box
              w="100%"
                textAlign="center"
                color="#e8155d"
                position="absolute"
                top="50%" 
                left="50%"
                transform="translate(-50%, -50%)" 
              >
                <Text fontSize="18px" fontWeight="600">
                  200+
                </Text>
                <Text color="white" fontSize="12px" fontWeight="500">
                  Happy Client
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
