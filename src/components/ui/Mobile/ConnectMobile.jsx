import { Box, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import text from "../../../assets/textff.png";
import circles from "../../../assets/wdisolar.png";
import WdiButton from "../../../components/ui/Button";

const Connect = () => {
  return (
    <Container
      maxW="container.xxl"
      bgColor="#1A1A1A"
      display="flex"
      flexDirection={{ base: "column", md: "row" }} // Stack on mobile, row on larger screens
      justifyContent="space-between"
      p={{ base: "1.5rem", md: "2.9rem" }} // Smaller padding on mobile
      alignItems="center"
      gap={{ base: 4, md: 6 }} // Smaller gap on mobile
    >
      <Image
        h={{ base: "300px", md: "545px" }} 
        zIndex={0}
        src={circles}
      />
      <Box
        zIndex={1}
        w={{ base: "100%", md: "50%" }} // Full width on mobile, 50% on larger screens
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={4}
      >
        <Image src={text} h={{ base: "80px", md: "140px" }} />{" "}
        {/* Smaller image on mobile */}
        <Text
          fontSize={{ base: "md", md: "large" }}
          color="#FFFFFF"
          fontWeight={500}
        >
          We put you at the centre of everything we do. Top class service and a
          memorable experience awaits..
        </Text>
        <WdiButton Context="Let’s Talk" />
      </Box>
    </Container>
  );
};

export default Connect;
