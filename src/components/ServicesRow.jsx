import { Box, SimpleGrid, Text, Image, VStack } from "@chakra-ui/react";
import pooja from "../assets/Images/poojas.png";
import cow from "../assets/Images/cow.png";
import kalash from "../assets/Images/new_Images/kalsh.png";

const ServicesRow = ({ des, title, arr }) => {
  return (
    <Box marginTop="10" padding="4" bg="gray.50">
      <VStack mb={6} alignItems="flex-start">
        <Text fontSize="2xl" fontWeight="bold" mb="4" textAlign="left">
          {title}
        </Text>
        <Text fontSize="medium" color="261501">
          {des}
        </Text>
      </VStack>
      <SimpleGrid columns={[1, 2, 4]} spacing={10}>
        {arr.map((service, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="20px"
            overflow="hidden"
            bg="white"
          >
            <Box
              h="180.34"
              w="240"
              position="relative"
              overflow="hidden"
              _hover={{
                cursor: "pointer",
                transform: "scale(1.05)",
                boxShadow: "lg",
                animation: "scaleUp 0.3s ease-in-out",
              }}
              transition="transform 0.3s, box-shadow 0.3s"
            >
              <Image
                src={service.imageUrl}
                alt={service.title}
                h="full"
                w="full"
                objectFit="cover"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                h="full"
                w="full"
                bg="rgba(0, 0, 0, 0.5)"
                opacity="0"
                transition="opacity 0.3s ease-in-out"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                _hover={{ opacity: 1 }}
              >
                <Image h="100px" src={kalash} />
                <Text as="span" color="white" fontSize="sm" fontWeight="bold">
                  Learn More
                </Text>
              </Box>
            </Box>
            <Box padding="4">
              <Text fontWeight="bold" textAlign="left">
                {service.title}
              </Text>
              <Text fontSize="sm" textAlign="left">
                {service.description}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ServicesRow;
