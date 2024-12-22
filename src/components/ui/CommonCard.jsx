import { Box, Text, SimpleGrid, Image } from "@chakra-ui/react";
import kalash from "../../assets/Images/new_Images/kalsh.png";
import { NavLink } from "react-router-dom";


const CommonCard = ({cardData}) => {

  return (
    <Box marginTop={4} padding="4" bg="gray.50">
      <SimpleGrid columns={[3]} spacing={10}>
        {cardData.map((card, index) => (
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
              <NavLink to={card.link}>
                <Image
                  src={card.imageUrl}
                  alt={card.title}
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
              </NavLink>
            </Box>

            <Box padding="4">
              <Text fontWeight="bold" textAlign="left">
                {card.title}
              </Text>
              <Text fontSize="sm" textAlign="left">
                {card.description}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CommonCard;
