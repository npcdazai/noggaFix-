import { Box, Button, Text } from "@chakra-ui/react";

const DonationMobile = () => {
  return (
    <Box textAlign="center" padding="4" bg="gray.50" marginTop="10">
      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb="4">
        Support the Temple
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }} mb="6">
        Your generosity helps us continue our services and community activities.
      </Text>
      <Button 
        bgGradient="linear(to-r, #F6B253, #FF9500)"
        color="white"
        size={{ base: "md", md: "lg" }} // Adjust size for mobile
        width="100%" // Make the button full width
        padding={{ base: "6", md: "8" }} // Adjust padding for mobile
        borderRadius="full"
      >
        Donate Now
      </Button>
    </Box>
  );
};

export default DonationMobile;
