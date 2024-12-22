import { Box, Button, Text } from "@chakra-ui/react";

const Donation = () => {
  return (
    <Box textAlign="center" padding="4" bg="gray.50" marginTop="10">
      <Text fontSize="3xl" fontWeight="bold" mb="4">
        Support the Temple
      </Text>
      <Text fontSize="lg" mb="6">
        Your generosity helps us continue our services and community activities.
      </Text>
      <Button 
        bgGradient="linear(to-r, #F6B253, #FF9500)"
        color="white"
        size="lg" 
        padding="8"
        paddingLeft="60"
        paddingRight="60" 
        borderRadius="full"
        _hover={{
          bgGradient: "linear(to-r, #FF9500, #F6B253)",
        }}
      >
        Donate Now
      </Button>
    </Box>
  );
};

export default Donation;
