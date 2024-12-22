import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import templeImage from "../assets/Images/poojas.png"; // Use the same image as before or change as needed
import { NavLink } from "react-router-dom";

const PoojaOffering = () => {
  return (
    <Box w="100%" h="100%" py={8} px={6}>
      {/* Temple Image */}
      <Image
        src={templeImage}
        alt="Temple"
        width="100%"
        height={{ base: "300px", md: "400px" }}
        objectFit="cover"
        borderRadius="20px"
        mb={6}
      />

      {/* Heading */}
      <Heading textAlign="left" size="lg" mb={4}>
        Pooja Offering
      </Heading>

      {/* Description */}
      <Text fontSize="md" textAlign="left" mb={6}>
        Our temple offers various pooja services that cater to the spiritual
        needs of our devotees. Whether its a daily ritual or a special ceremony,
        our offerings are crafted with utmost devotion and reverence. Join us in
        seeking divine blessings through these sacred pooja rituals, performed
        with love and devotion to bring peace, prosperity, and happiness into
        your life.
      </Text>
      {/* Book Now Button */}
      <Box textAlign="center" mb={6}>
        <NavLink to="/book-pooja">
          <Button
            bgGradient="linear(to-r, #F6B253, #FF9500)"
            color="white"
            size="lg"
            padding="8"
            width={{ base: "80%", md: "40%" }}
            borderRadius="full"
            _hover={{
              bgGradient: "linear(to-r, #F6B253, #FF9500)",
            }}
          >
            Book Now
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default PoojaOffering;
