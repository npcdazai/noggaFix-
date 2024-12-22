import { Box, Heading, SimpleGrid, Text, VStack, Icon } from "@chakra-ui/react";
import { FaHeart, FaLightbulb, FaCalendarAlt, FaBookOpen } from "react-icons/fa";

const OurServicesMobile = () => {
  const services = [
    { icon: FaHeart, title: "Pooja", description: "Various Pooja services offered." },
    { icon: FaLightbulb, title: "Programs", description: "Community programs for all." },
    { icon: FaCalendarAlt, title: "Events", description: "Special events throughout the year." },
    { icon: FaBookOpen, title: "Education", description: "Educational sessions and workshops." },
  ];

  return (
    <Box textAlign="left" p={4}> {/* Adjusted padding */}
      <Heading mb={4} fontSize="xl"> {/* Adjusted font size */}
        Our Services
      </Heading>
      <SimpleGrid columns={2} spacing={4}> {/* Two columns with adjusted spacing */}
        {services.map((service, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="10px" 
            p={4}  
            bg="white"
            boxShadow="md"
            height="160px"
            textAlign="center" 
          >
            <VStack spacing={2} align="center">
              <Icon as={service.icon} boxSize={6} color="orange.500" /> {/* Adjusted icon size */}
              <Text fontWeight="bold" fontSize="md">{service.title}</Text> {/* Adjusted font size */}
              <Text fontSize="sm" color="gray.600">
                {service.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default OurServicesMobile;
