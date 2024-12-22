import { Box, Text, SimpleGrid, Icon, Button } from "@chakra-ui/react";
import { FaCreditCard, FaUniversity, FaMobileAlt } from "react-icons/fa";

const Payment = () => {
  // Payment methods data
  const paymentMethods = [
    { title: "Credit/Debit Card", icon: FaCreditCard },
    { title: "Bank Transfer", icon: FaUniversity },
    { title: "UPI", icon: FaMobileAlt },
    // { title: "Wallet", icon: FaWallet },
  ];

  return (
    <Box marginTop="10" padding="6" bg="gray.50">
      {/* Header */}
      <Text fontSize="3xl" fontWeight="bold" mb="6" textAlign="left">
        Choose Your Payment Method
      </Text>

      {/* Payment method cards */}
      <SimpleGrid columns={[1, 2, 4]} spacing={8}>
        {paymentMethods.map((method, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="20px"
            padding="6"
            bg="white"
            textAlign="center"
            boxShadow="sm"
            _hover={{ boxShadow: "md", transform: "scale(1.05)" }}
            transition="all 0.2s"
          >
            {/* Icon */}
            <Icon as={method.icon} w={12} h={12} mb="4" color="orange.400" />

            {/* Title */}
            <Text fontSize="xl" fontWeight="bold">
              {method.title}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Secure Information Section */}
      <Box marginTop="10" textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" mb="4">
          Secure Information
        </Text>
        <Text fontSize="sm" mb="6" px="10">
        We prioritize the security of your transactions. Our payment systems are encrypted and comply with the highest standards of security. Your personal and financial information is protected, ensuring a safe and secure donation process. We are committed to maintaining your trust and ensuring that your contributions are used effectively for the betterment of the community.        </Text>

        {/* Donation Button */}
        <Button 
        bgGradient="linear(to-r, #F6B253, #FF9500)"
        color="white"
        size="lg" 
        padding="8"
        width="70%"
        borderRadius="full"
      >
        Donate Now
      </Button>
      </Box>
    </Box>
  );
};

export default Payment;
