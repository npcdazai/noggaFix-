import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  keyframes,
} from "@chakra-ui/react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import AButton from "../components/ui/Button"

const animationKeyframes = keyframes`
  0% { opacity: 0; transform: translateY(-10px); }
  50% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); }
`;

const animation = `${animationKeyframes} 3s infinite`;

const titles = [
  "Experience of over 22 years",
  "Expertise in all Major Technologies",
  "Award-winning portfolio",
  "Accurate business Analysis",
  "Immaculate project planning",
  "Excellent and timely execution",
  "State-of-the-art infrastructure",
  "Integrity and sincerity",
  "A large team of developers",
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      bgColor="black"
      borderBottom="1px solid #5C5C5C"
      style={{ position: "sticky", top: 0, zIndex: 100 }}
      maxW="container.2xl"
    >
      <Box>
        <Flex
          py={{ base: 1, md: 1.3, lg: 1.9 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <ScrollLink
            to="hero"
            smooth={true}
            duration={800}
          >
            <Image
              ml={{ base: "10px", md: "1rem", lg: "2rem" }}
              src={logo}
              h={{ base: "40px", md: "50px", lg: "60px" }}
              w="66px"
              alt="WDI"
            />
          </ScrollLink>
          <Box
            w={"100%"}
            h={{ base: "30px", md: "50px", lg: "66px" }}
            textAlign="center"
            ml={{ base: 2, md: 3, lg: 4 }}
          >
            <Text
              textColor="#e8155d"
              className="Robo"
              fontSize={{ base: "12px", md: "18px", lg: "24px" }}
              fontWeight={500}
              lineHeight="21.09px"
              animation={animation}
              textAlign="center"
              py={{ base: 3, md: 5, lg: 6 }}
            >
              {titles[currentIndex]}
            </Text>
          </Box>
          <ScrollLink
            to="contact-section"
            smooth={true}
            duration={800} // Adjust the duration as needed for a smoother scroll
          >
            <Button
              bgColor="#e8155d"
              _hover={{ bg: "#e8155d" }}
              w={{ base: "85px", md: "70px", lg: "166px" }}
              h={{ base: "25px", md: "35px", lg: "50px" }}
              mr={{ base: "10px", md: "1rem", lg: "2rem" }}
              borderRadius="0px"
              textColor="white"
              className="pinkcolor"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
            >
              Contact Us
            </Button>
            {/* <AButton Context={"Contact Us"}/> */}
          </ScrollLink>
        </Flex>
      </Box>
    </Container>
  );
};

export default Header;
