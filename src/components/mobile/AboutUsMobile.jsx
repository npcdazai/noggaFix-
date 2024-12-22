// import { Box, Text, Image, Flex } from "@chakra-ui/react";

// const AboutUsMobile = () => {
//   const cardData = [
//     {
//       title: "Pooja",
//       description: "Description for Pooja",
//       imageUrl: "https://via.placeholder.com/300x200?text=Pooja",
//     },
//     {
//       title: "Festival",
//       description: "Description for Festival",
//       imageUrl: "https://via.placeholder.com/300x200?text=Festival",
//     },
//     {
//       title: "Ceremony",
//       description: "Description for Ceremony",
//       imageUrl: "https://via.placeholder.com/300x200?text=Ceremony",
//     },
//     {
//       title: "Event",
//       description: "Description for Event",
//       imageUrl: "https://via.placeholder.com/300x200?text=Event",
//     },
//   ];

//   return (
//     <Box marginTop="10" padding="4" bg="gray.50">
//       <Text fontSize="2xl" fontWeight="bold" mb="4" textAlign="left">
//         About Us
//       </Text>
//       <Text fontSize="lg" mb="8" textAlign="left">
//         We are dedicated to providing spiritual guidance and services through our various rituals and ceremonies. Join us in celebrating and understanding our traditions.
//       </Text>

//       <Flex overflowX="scroll" paddingBottom="4">
//         {cardData.map((card, index) => (
//           <Box
//             key={index}
//             minWidth="calc(50% - 16px)" // Adjust minWidth for two cards to fit with margin
//             maxWidth="calc(50% - 16px)" // Ensure maxWidth matches minWidth for consistency
//             borderWidth="1px"
//             borderRadius="10px"
//             overflow="hidden"
//             bg="white"
//             mr="4"  // Margin between cards
//           >
//             <Image src={card.imageUrl} alt={card.title} />
//             <Box padding="4">
//               <Text fontWeight="bold" textAlign="left" fontSize="md">
//                 {card.title}
//               </Text>
//               <Text fontSize="sm" textAlign="left">
//                 {card.description}
//               </Text>
//             </Box>
//           </Box>
//         ))}
//       </Flex>
//     </Box>
//   );
// };

// export default AboutUsMobile;
import { Box, Text, SimpleGrid, Image, HStack } from "@chakra-ui/react";
import pooja from "../../assets/Images/pooja.png";
import diwali from "../../assets/Images/diwali.png";
import program from "../../assets/Images/program.png";
import event from "../../assets/Images/event.png";
const AboutUs = () => {
  const cardData = [
    {
      title: "Pooja",
      description: "Description for Pooja",
      imageUrl: pooja,
    },
    {
      title: "Festival",
      description: "Description for Festival",
      imageUrl: diwali,
    },
    {
      title: "Program",
      description: "Description for Ceremony",
      imageUrl: program,
    },
    {
      title: "Event",
      description: "Description for Event",
      imageUrl: event,
    },
  ];

  return (
    <Box marginTop="10" padding="4" bg="gray.50">
      <Text fontSize="3xl" fontWeight="bold" mb="4" textAlign="left">
        About Us
      </Text>
      <Text fontSize="medium" mb="8" textAlign="left">
        We are dedicated to providing spiritual guidance and services through
        our various rituals and ceremonies. Join us in celebrating and
        understanding our traditions.
      </Text>
      <HStack overflowX="scroll" columns={[1, 2, 4]} spacing={1}>
        {cardData.map((card, index) => (
          <Box
            key={index}
            minWidth="calc(60% - 16px)" 
            borderWidth="1px"
            borderRadius="10px"
            overflow="hidden"
            bg="white"
            mr="4"
          >
            <Box
              h="130.34"
              w="210"
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
                alignItems="center"
                justifyContent="center"
                _hover={{ opacity: 1 }}
              >
                <Text color="white" fontSize="lg" fontWeight="bold">
                  Learn More
                </Text>
              </Box>
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
      </HStack>
    </Box>
  );
};

export default AboutUs;
