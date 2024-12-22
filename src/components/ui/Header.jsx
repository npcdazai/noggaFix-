import React from "react";
import { Box, Button, HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logos/websitelogo.jpg";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Box px={4} bgColor="white" position="sticky" zIndex={10} top={0}>
      <HStack justifyContent="space-between" bgColor="white">
        <Image
          src={logo}
          boxSize="50px"
          borderRadius="50%"
          objectFit="cover"
          alt="Website Logo"
        />
        <HStack spacing={4} bgColor="white">
          <Navigation />
          <Button
            color="white"
            bgGradient="linear(to-l, #F6B253, #FF9500)"
            _hover={{
              bgGradient: "linear(to-l, #FF9500, #F6B253)",
            }}
          >
            Donate
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
