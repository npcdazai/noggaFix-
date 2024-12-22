import React, { useState } from "react";
import { Box, Button, HStack, Image, IconButton, Text, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/logos/websitelogo.jpg";
import NavigationMobile from "./NavigationMobile";

const HeaderMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={5} bgColor="white" position="sticky" zIndex={10} top={0}>
      <HStack justifyContent="space-between" bgColor="white" align="center">
        {/* Logo */}
        <Image
          src={logo}
          boxSize="50px"
          borderRadius="50%"
          objectFit="cover"
          alt="Website Logo"
        />
        
        {/* Title in the middle */}
        <Text fontSize="xl" fontWeight="bold" color="#FF9500">
          Temple
        </Text>
        
        {/* Hamburger Menu on the right */}
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Open Menu"
          onClick={onOpen}
        />
        
        {/* Drawer for navigation */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>

            <DrawerBody>
              <NavigationMobile />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </Box>
  );
};

export default HeaderMobile;
