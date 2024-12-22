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
    HStack,
  } from "@chakra-ui/react";
  import { CheckCircleIcon } from "@chakra-ui/icons";
  import greenforest from "../../assets/Images/greencow.png";
  import temple from "../../assets/Images/new_Images/MobileVedSakti.png";
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
        bgImage={greenforest}
        bgSize="cover"
        p={6}
        mt={4}
        rounded="lg"
        boxShadow="lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
        h="100%"
      >
        {/* Image Section */}
        <Box ref={tiltRef} mb={4} w="100%">
          <Image src={temple} borderRadius="md" />
        </Box>
  
        {/* Content Section */}
        <VStack alignItems="center" spacing={4} textAlign="center">
          <Text color="red.600" fontWeight="bold" textTransform="uppercase">
            Education for All Rural Children
          </Text>
          <Heading as="h2" size="md">
            We Hindus Believe In The Holy Vedas.
          </Heading>
          <List spacing={2} w="100%" justifyContent="center">
            <ListItem display="flex" alignItems="center">
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Rig-Veda
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Sama-Veda
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Yajur-Veda
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Atharva-Veda
            </ListItem>
          </List>
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
  