import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa6";
import { MdPeopleAlt, MdEvent } from "react-icons/md";
import { GiPrayer } from "react-icons/gi";
import { FaLongArrowAltRight } from "react-icons/fa";

const OurServices = ({title , des,  arr}) => {


  return (
    <Box textAlign="left" p={8} w="100%">
      <Heading mb={6}>{title}</Heading>
      <Text as={"p"} fontSize="small">{des}</Text>
      <SimpleGrid columns={{ base: 1, lg: 4 }} spacing={8} w="100%">
        {arr.map((service, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="20px"
            p={8}
            bg="white"
            boxShadow="md"
            w="100%"
            h="100%"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
              // bgColor: "#FF9500",
              // color:"#fff",
              transform: "scale(1.05)",
              boxShadow: "lg",
              animation: "scaleUp 0.3s ease-in-out",
            }}
          >
            <VStack alignItems="flex-start" w="100%">
              <Icon as={service.icon} boxSize={10} color="orange.500"/>
              <Text fontWeight="bold" fontSize="lg">
                {service.title}
              </Text>
              <Text color="gray.600">{service.description}</Text>
              {/* <HStack as="span">
                <Text as="span" fontSize="x-small"  >
                  LEARN MORE{" "}
                </Text>
                <Icon as={FaLongArrowAltRight} boxSize={7} color="orange.500"/>
              </HStack> */}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default OurServices;
