import { Box, Button, Flex, Image, Text, keyframes } from "@chakra-ui/react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const animationKeyframes = keyframes`
  0% { opacity: 0; transform: translateY(-10px); }
  50% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); }
`;

const animation = `${animationKeyframes} 3s infinite`;

const titles = [
  "Experience of over 22 years",
  "Expertise in all  Major Technologies",
  "Award-winning portfolio",
  "Accurate business Analysis",
  "Immaculate project planning",
  "Excellent ane timely execution",
  "Excellent ane timely execution",
  "State-of-the art infrastructure",
  "Integrity and sincerity ",
  "A large team of developers"
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <Box w={"100vw"}>
        <Flex
          bgColor="black"
          borderBottom="1px solid #5C5C5C"
          px={"2.5rem"}
          py={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Image ml="2rem" src={logo} h="67px" w="66px" alt="WDI" />
          <Box w={"780px"} h={"66px"} textAlign="center" ml={4}>
            <Text
              textColor="#e8155d"
              className="Robo"
              fontSize="24px"
              fontWeight={500}
              lineHeight="21.09px"
              animation={animation}
              textAlign="center"
              py={6}
            >
              {titles[currentIndex]}
            </Text>
          </Box>
          <NavLink>
            <Button
            
              bgColor="#e8155d"
              _hover={{ bg: "#e8155d" }}
              w={"166px"}
              h={"50px"}
              mr="2rem"
              borderRadius="0px"
              textColor="white"
              className="pinkcolor"
            >
              Contact Us
            </Button>
          </NavLink>
        </Flex>
      </Box>
    </div>
  );
};

export default Header;
