import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Image, Heading, Container } from "@chakra-ui/react";
import simpletend from "../../../assets/simpletend.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import upperQuotes from "../../../assets/upperquotes.png";
import lowerQuotes from "../../../assets/lowerqoutes.png";
import regc from "../../../assets/regccircle.png";
import wokacircle from "../../../assets/wokacircle.png";
import gsfcircle from "../../../assets/gsfcircle.png";
import prosperity from "../../../assets/properity.png";

const testimonials = [
  {
    quote:
      "The WDI team is professional, knowledgeable, and dedicated. They solve problems quickly, communicate well, and deliver as promised. We're impressed with their work and enjoy a great experience collaborating with them.",
    author: "Saeed Saatchi",
    role: "CEO & Founder, SimpliFiend",
    img: simpletend,
  },
  {
    quote:
      "Indeed, I am very happy with the quality of work carried out by Website Developers India Pvt. Ltd. They are prompt at work, and their team delivers on time with high-value solutions at affordable costs. Everything from them was outstanding in their delivery.",
    author: "Manvendra Kishor",
    role: "Director, WOKA",
    img: wokacircle,
  },
  {
    quote:
      "I'm so excited about the services offered by Website Developers India Pvt. Ltd. Their team did a great job and at cheaper rates. The supportive team at WDI helped in make my project more than I had expected. I would recommend them for web or app development services.",
    author: "Samantha Johnson",
    role: "Founder, prosperity.",
    img: prosperity,
  },
  {
    quote:
      "I am very pleased with the services of WDI. Their knowledgeable developers created a high-quality website for me at an affordable cost. The supportive team quickly solved any bugs arising in the project.",
    author: "Sophia Garcia,",
    role: "Founder, Regroup.",
    img: regc,
  },
  {
    quote:
      "Indeed, I am very happy with the quality of work carried out by Website Developers India Pvt. Ltd. They are prompt at work, and their team delivers on time with high-value solutions at affordable costs. Everything from them was outstanding in their delivery.",
    author: "Shramesh Sharma",
    role: "Founder, GetSetFit.",
    img: gsfcircle,
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
  
    const carouselStyle = {
      transition: "all .5s",
      ml: `-${currentSlide * 100}%`,
    };
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval); 
    }, []); 
  
    return (
      <Container bgColor="black" maxW="container.xl" overflow="hidden" p={[2, 4]}>
        <Heading
          fontWeight={600}
          fontSize={["24px", "40px"]}
          textAlign="center"
          color="#fff"
          mb={4}
        >
          Testimonial
        </Heading>
        <Flex
          w="full"
          bg="black"
          _dark={{
            bg: "#3e3e3e",
          }}
          py={["3rem", "6rem"]}
          alignItems="center"
          justifyContent="center"
        >
          <Flex w="full" pos="relative" p={4} > 
            <Flex h="100%" w="full" {...carouselStyle}>
              {testimonials.map((testimonial, index) => (
                <Box
                  h="100%"  
                  px={["1rem", "3rem"]}
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
                      alignItems="center"
                      px={["1rem", "5rem"]}
                      py={["1rem", "4rem"]}
                      w="100%"
                      gap="1.1rem"
                      borderRadius="10px"
                      h="400px"
                    >
                      <Heading
                        mt="2rem"
                        fontSize={["14px", "20px"]}
                        lineHeight="30px"
                        fontWeight={600}
                        color="#FFFFFF"
                      >
                        “{testimonial.quote}”
                      </Heading>
                      <Text
                        color="#E8155D"
                        fontWeight={500}
                        fontSize={["16px", "18px"]}
                        lineHeight="15px"
                      >
                        {testimonial.role}
                      </Text>
                      <Text
                        color="#E8155D"
                        fontWeight={500}
                        fontSize={["14px", "18px"]}
                        lineHeight="27px"
                      >
                        {testimonial.author}
                      </Text>
                    </Box>
                    <Box
                      p={2}
                      bg="black"
                      position="absolute"
                      w={["100px", "149px"]}
                      h={["100px", "149px"]}
                      top={["-60px", "-80px"]}
                      left="50%"
                      transform="translateX(-50%)"
                      borderRadius="50%"
                    >
                      <Image
                        src={testimonial.img}
                        w={["80px", "129px"]}
                        h={["80px", "129px"]}
                      />
                    </Box>
                    <Image
                      src={lowerQuotes}
                      w={["60px", "99px"]}
                      h={["55px", "88px"]}
                      position="absolute"
                      bottom="-25"
                      right="9px"
                    />
                    <Image
                      src={upperQuotes}
                      w={["60px", "99px"]}
                      h={["55px", "88px"]}
                      position="absolute"
                      top="-30"
                      left="15px"
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
  