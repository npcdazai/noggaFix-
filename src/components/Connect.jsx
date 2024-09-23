import { Box, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import text from "../assets/textff.png";
import circles from "../assets/wdisolar.png";
import WdiButton from "../components/ui/Button";
const Connect = () => {
  return (
    <Container
      maxW="container.xxl"
      bgColor="#1A1A1A"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      p={"2.9rem"}
      alignItems={"center"}
      gap={6}
    >
      <Box
        zIndex={1}
        w="50%"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={4}
      >
        <Image src={text} h="140px" />
        <Text fontSize="large" color="#FFFFFF" fontWeight={500}>
          We put you at the centre of everything we do. Top class service and a
          memorable experience awaits..
        </Text>
        <WdiButton Context="Let’s Talk" />
      </Box>
      <Image  h="545px" zIndex={0} src={circles} />
    </Container>
  );
};

export default Connect;