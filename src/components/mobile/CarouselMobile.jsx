import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const CarouselMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const items = [
    { title: "Pooja 1", description: "Description of Pooja 1", imageUrl: "https://via.placeholder.com/600x300?text=Pooja+1" },
    { title: "Pooja 2", description: "Description of Pooja 2", imageUrl: "https://via.placeholder.com/600x300?text=Pooja+2" },
    { title: "Pooja 3", description: "Description of Pooja 3", imageUrl: "https://via.placeholder.com/600x300?text=Pooja+3" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <Box position="relative" borderRadius="20px" overflow="hidden" bg="gray.100">
      <Box
        as="img"
        src={items[currentIndex].imageUrl}
        alt={items[currentIndex].title}
        width="100%"
        height={{ base: "200px", md: "400px" }} // Mobile-friendly height
        objectFit="cover"
      />
      <Box 
        position="absolute" 
        bottom={{ base: "5px", md: "10px" }} 
        left="50%" 
        transform="translateX(-50%)" 
        textAlign="center"
        paddingX={{ base: "4", md: "0" }}  // Padding adjustment for mobile
      >
        <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">{items[currentIndex].title}</Text>
        <Text fontSize={{ base: "sm", md: "md" }}>{items[currentIndex].description}</Text>
        <Button
          mt={2}
          borderRadius="full"
          color="orange.500"
          variant="outline"
          _hover={{ bg: "orange.100" }}
          size={{ base: "sm", md: "md" }} // Button size adjustment for mobile
        >
          Learn More
        </Button>
      </Box>
      <Button
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={prevSlide}
        borderRadius="full"
        bg="white"
        size={{ base: "sm", md: "lg" }} // Button size adjustment
        padding="8px"
        _hover={{ bg: "orange" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="black" strokeWidth="2" />
        </svg>
      </Button>
      <Button
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={nextSlide}
        borderRadius="full"
        bg="white"
        size={{ base: "sm", md: "lg" }} // Button size adjustment
        padding="8px"
        _hover={{ bg: "orange" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="black" strokeWidth="2" />
        </svg>
      </Button>
    </Box>
  );
};

export default CarouselMobile;
