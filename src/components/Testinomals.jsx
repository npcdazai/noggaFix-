import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Image, Heading, HStack, Container } from "@chakra-ui/react";
import simpletend from "../assets/simpletend.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import upperQuotes from "../assets/upperquotes.png";
import lowerQuotes from "../assets/lowerqoutes.png";

const testimonials = [
  {
    quote:
      "The team is professional and dedicated to the project; we feel they’re part of our own team.",
    author: "Saeed Saatchi",
    role: "CEO & Founder, SimpliFiend",
  },
  {
    quote:
      "We had an excellent experience working with the team; they were highly skilled and collaborative.",
    author: "John Doe",
    role: "Product Manager, Example Corp",
  },
  {
    quote:
      "Their commitment to the project was evident from the start, and they delivered exceptional results.",
    author: "Jane Smith",
    role: "CTO, Tech Innovations",
  },
];

const Carousel = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsCount = testimonials.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? testimonialsCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === testimonialsCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Autoplay left to right
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []); // Empty dependency array ensures effect runs once on mount

  return (
      <Container bgColor="black" maxW="container.2xl" overflow="hidden">
        <Heading fontWeight={600} fontSize="40px" textAlign="center" color="#ffff">Testimonial</Heading>
        <Flex
          w="full"
          bg="black"
          _dark={{
            bg: "#3e3e3e",
          }}
          py={"6rem"}
          // px={"3rem"}
          alignItems="center"
          justifyContent="center"
        >
          <Flex w="full" pos="relative">
            <Flex h="100%" w="100%" {...carouselStyle}>
              {testimonials.map((testimonial, index) => (
                <Box
                  px="3rem"
                  key={`slide-${index}`}
                  flex="none"
                  boxSize="full"
                  shadow="md"
                >
                  <Box
                    position="relative"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    textAlign="center"
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      bgColor="#6D6D6D40"
                      p="4rem"
                      w="100%"
                      h="100%"
                      gap="2rem"
                      borderRadius="10px"
                    >
                      <Heading
                        mt="1rem"
                        fontSize="20px"
                        lineHeight="30px"
                        fontWeight={600}
                        color="#FFFFFF"
                      >
                        “{testimonial.quote}”
                      </Heading>
                      <Text
                        color="#E8155D"
                        fontWeight={500}
                        fontSize="18px"
                        lineHeight="27px"
                      >
                        {testimonial.role}
                      </Text>
                      <Text
                        color="#E8155D"
                        fontWeight={500}
                        fontSize="18px"
                        lineHeight="27px"
                      >
                        {testimonial.author}
                      </Text>
                    </Box>
                    <Box
                      p={2}
                      bg="black"
                      position="absolute"
                      w="149px"
                      h="149px"
                      top="-80px"
                      left="50%"
                      transform="translateX(-50%)"
                      borderRadius="50%"
                    >
                      <Image src={simpletend} w="129px" h="129px" />
                    </Box>
                    <Image
                      src={lowerQuotes}
                      w="99.15px"
                      h="88.39px"
                      position="absolute"
                      bottom="-37"
                      right="10px"
                    />
                    <Image
                      src={upperQuotes}
                      w="99.15px"
                      h="88.39px"
                      position="absolute"
                      top="-37"
                      left="40px"
                    />
                  </Box>
                </Box>
              ))}
            </Flex>
            <Text {...arrowStyles} left="0" onClick={prevSlide}>
              <FaChevronLeft />
            </Text>
            <Text {...arrowStyles} right="0" onClick={nextSlide}>
              <FaChevronRight />
            </Text>

          </Flex>
        </Flex>
      </Container>
  );
};

export default Carousel;
