import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { FaPray, FaCalendarAlt } from "react-icons/fa"; // Icons for each category
import pooja from "../../assets/Images/circlepooja.png"
import circle from "../../assets/Images/cicrclwfes.png"
const CategoriesMobile = () => {
  const categories = [
    {
      title: "Pooja",
      description: "Description for Pooja",
      imageUrl: pooja,
      icon: FaPray,
    },
    {
      title: "Festival",
      description: "Description for Festival",
      imageUrl: circle,
      icon: FaCalendarAlt,
    },
  ];

  return (
    <Box marginTop="10" padding="4" bg="gray.50">
      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb="4" textAlign="left">
        Categories
      </Text>
      {categories.map((category, index) => (
        <Flex
          key={index}
          borderWidth="1px"
          borderRadius="20px"
          overflow="hidden"
          bg="white"
          padding={{ base: "2", md: "4" }} // Responsive padding
          alignItems="center"
          mb="4" // Decrease margin bottom for mobile
          boxShadow="md"
        >
          {/* Image on the left side */}
          <Image
            src={category.imageUrl}
            alt={category.title}
            boxSize={{ base: "60px", md: "100px" }} // Responsive image size
            borderRadius="full"
            marginRight={{ base: "4", md: "6" }} // Responsive margin
          />

          {/* Text in the middle, left-aligned */}
          <Box flex="1" textAlign="left">
            <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold"> {/* Responsive font size */}
              {category.title}
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }}>{category.description}</Text> {/* Responsive font size */}
          </Box>

          {/* Icon on the right side */}
          <Box>
            <category.icon size="30px" /> {/* Reduced icon size */}
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default CategoriesMobile;
