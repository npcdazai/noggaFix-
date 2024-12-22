import {
  Box,
  Button,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Icon,
  Container,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";

const footerData = [
  {
    id: 1,
    title: "Information",
    items: ["Puja", "Services", "Temple", "Holis", "Volunteers"],
  },
  {
    id: 2,
    title: "Others",
    items: ["Donations", "Contact Us", "Events"],
  },
];

const FooterCom = () => {
  return (
    <Container
      maxW="container.2xl"
      bgColor="#F6B253"
      p={{ base: "2rem", lg: "3rem" }} // Adjust padding for larger screens
      display="flex"
      flexDirection={{ base: "column", lg: "row" }} // Flex row for lg screens
      justifyContent="space-between"
      alignItems="flex-start"
      w="100%"
    >
      <Flex
        w="80%"
        gap={8}
        flexDirection={{ base: "column", lg: "row" }} // Stack on mobile, row on large screens
        alignItems="flex-start"
      >
        {/* About Us Section */}
        <VStack w={{ base: "100%", lg: "30%" }} gap={4} alignItems="flex-start">
          <Heading
            color="#FFFFFF"
            fontSize="sm"
            fontWeight="700"
          >
            About Us
          </Heading>
          <Text
            color="#E6E6E6"
            fontSize="sm"
            fontWeight="400"
            textAlign="start"
            _hover={{ color: "#E5195E", cursor: "pointer" }}
          >
            You need to be sure there isn’t anything embarrassing hidden in the
            middle of text.
          </Text>
          <UnorderedList styleType="none" m="0" p="0">
            <ListItem mb="0.5rem">
              <HStack gap={4}>
                <Icon as={MdOutlineEmail} />
                <Text
                  color="#E6E6E6"
                  fontSize="sm"
                  fontWeight="400"
                  _hover={{ color: "#E5195E", cursor: "pointer" }}
                >
                  info@example.com
                </Text>
              </HStack>
            </ListItem>
            <ListItem mb="0.5rem">
              <HStack gap={4}>
                <Icon as={FaPhoneAlt} />
                <Text
                  color="#E6E6E6"
                  fontSize="sm"
                  fontWeight="400"
                  _hover={{ color: "#E5195E", cursor: "pointer" }}
                >
                  987-987-930-302
                </Text>
              </HStack>
            </ListItem>
            <ListItem mb="0.5rem">
              <HStack gap={4}>
                <Icon as={CiLocationOn} />
                <Text
                  color="#E6E6E6"
                   fontSize="sm"
                  fontWeight="400"
                  textAlign="start"
                  _hover={{ color: "#E5195E", cursor: "pointer" }}
                >
                  14/A, Poor Street City Tower, New York USA
                </Text>
              </HStack>
            </ListItem>
          </UnorderedList>
        </VStack>

        {/* Information and Others Sections */}
        <Flex w={{ base: "100%", lg: "70%" }} gap={8}>
          {footerData.map((val) => (
            <Box key={val.id}
            mr="5rem">
              <Heading
                color="#FFFFFF"
                 fontSize="sm"
                fontWeight="700"
                mb="1rem"
              >
                {val.title}
              </Heading>
              <UnorderedList styleType="none" m="0" p="0">
                {val.items.map((item, index) => (
                  <ListItem key={index} mb="0.5rem">
                    <Text
                      color="#E6E6E6"
                      fontSize="sm"
                      fontWeight="400"
                      _hover={{ color: "#E5195E", cursor: "pointer" }}
                    >
                      {item}
                    </Text>
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          ))}
        </Flex>
      </Flex>

      {/* Social Media and Share Button */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={6}
        mt={{ base: "2rem", lg: "0" }}
      >
        <HStack gap={3}>
          <Icon as={FaWhatsapp} />
          <Icon as={FaInstagram} />
          <Icon as={AiOutlineFacebook} />
        </HStack>

        <Button
          bgColor="#FF9500"
          color="#E5195E"
          fontWeight="400"
          fontSize="14px"
          width="237px"
          height="38px"
          borderRadius="10px"
          boxShadow="md"
        >
          Share
        </Button>
      </Box>
    </Container>
  );
};

export default FooterCom;
