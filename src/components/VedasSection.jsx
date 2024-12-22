import {
  Box,
  Text,
  Stack,
  Image,
  Button,
  Heading,
  List,
  ListItem,
  ListIcon,
  VStack,
  SimpleGrid,
  Grid,
  HStack,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import lordGanesha from "../assets/Images/new_Images/LordGanesh.jpeg";
import LordShiva from "../assets/Images/new_Images/LordShiva.jpeg";
import temple from "../assets/Images/new_Images/finnal.png";
import greenforest from "../assets/Images/greencow.png";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";

function VedasSection() {
  const tiltRef = useRef(null);
  useEffect(() => {
    const node = tiltRef.current;
    if (node) {
      VanillaTilt.init(node, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
    return () => {
      if (node && node.vanillaTilt) {
        node.vanillaTilt.destroy();
      }
    };
  }, []);
  return (
    <Box
      //   bg="white"
      bgImage={greenforest}
      bgSize="cover"
      p={14}
      mt={4}
      rounded="lg"
      boxShadow="lg"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      h="100%"
    >
      {/* Left Image Section */}
      <HStack ref={tiltRef} flex="1" mb={{ base: 8, md: 0 }} w="50%">
        <Image src={temple} />
      </HStack>

      {/* Right Content Section */}
      <VStack
        alignItems="flex-start"
        spacing={4}
        flex="1"
        ml={{ base: 0, md: 10 }}
      >
        <Text color="red.600" fontWeight="bold" textTransform="uppercase">
          Education for All Rural Children
        </Text>
        <Heading as="h2" size="lg">
          We Hindus Believe In The Holy Vedas.
        </Heading>
        <HStack justifyContent="center">
          <List
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            alignItems="end"
            justifyContent="center"
            spacing={2}
            gap={4}
          >
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Rig-Veda
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Sama-Veda
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Yajur-Veda
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Atharva-Veda
            </ListItem>
          </List>
        </HStack>
        <Text fontSize="sm">
          We Hindus believe that the Vedas transcend all time, don’t have a
          beginning or an end.
        </Text>
        <Button colorScheme="white" color="red" variant="solid">
          Learn More →
        </Button>
      </VStack>
    </Box>
  );
}

export default VedasSection;
