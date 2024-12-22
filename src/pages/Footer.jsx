import { Box, Container, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
const Footer = () => {
  return (
    <Box px={6} py={4} bgColor="#FF9500">
      <HStack justifyContent="space-between" alignItems="center">
        <Text color="#fff" fontSize="small">
          Copyright ©UnFaced - 2024
        </Text>
      </HStack>
    </Box>
  );
};

export default Footer;
