import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import slider1 from "../../assets/Images/members/images/mainbab.jpg";
import slider2 from "../../assets/Images/members/images/person1.jpg";
import slider3 from "../../assets/Images/members/images/pp3.jpg";
import slider4 from "../../assets/Images/members/images/pp4.jpg";
import slider5 from "../../assets/Images/members/images/pp5.jpg";
import slider6 from "../../assets/Images/members/images/pp6.jpg";
import slider7 from "../../assets/Images/members/images/pp2.jpg";
import offering from "../../assets/Images/cowoffering.png"
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const membersData = [
  {
    name: "Royal Rudra JI Maharaj",
    role: "Renowned Scholar and Guide",
    image: slider1,
  },
  {
    name: "Acharya Atul Tiwari",
    role: "प्रबंधक अध्यक्ष (Head Administrator)",
    image: slider2,
  },
  {
    name: "Anand Tiwari",
    role: "कोषादायाछ (Treasurer)",
    image: slider3,
  },
  {
    name: "Shivam Tiwari",
    role: "धर्माचार्य (Media Head)",
    image: slider4,
  },
  {
    name: "Deepak Shukla",
    role: "Organisation minister",
    image: slider5,
  },
  {
    name: "Dhanesh Chandra Dubey",
    role: "Organisation minister",
    image: slider6,
  },
  {
    name: "Pradeep Tiwari",
    role: "Treasurer",
    image: slider7,
  },
];

const Members = () => {
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTabIndex((prevIndex) => (prevIndex + 1) % membersData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="mainmembers"
      bgGradient="linear(to-b, #F6B253, #FF9500)"
      // bgImage={offering}
      // bgSize="cover"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={8}
      borderRadius="20px"
      w="100%"
    >
      <Text
        as="h1"
        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}  // Reduced font size
        fontWeight="bold"
        fontFamily="Roca Two"
        color="#800000"
        mb={6}
        // textAlign="center"
      >
        Our Esteemed Members
      </Text>

      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        gap={6}
        alignItems="center"
        w="100%"
      >
        <Box
          position="relative"
          w={{ base: "100%", md: "50%" }}  // Full width on mobile, 50% on larger screens
          h="350px"  // Adjusted height
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {membersData.map((member, index) => (
            <Image
              key={index}
              src={member.image}
              alt={member.name}
              position="absolute"
              top={0}
              h="100%"
              w="90%"
              objectFit="cover"
              borderRadius="10px"
              transition="opacity 0.5s ease-in-out"
              opacity={tabIndex === index ? 1 : 0}
            />
          ))}
        </Box>

        <Flex alignItems="flex-end" w="50%" textAlign="center"  >
          {membersData.map((member, index) => (
            <Flex
              key={index}
              position="absolute"
              transition="opacity 0.5s ease-in-out"
              alignItems="center"
              opacity={tabIndex === index ? 1 : 0}
            >
              <Text
                fontFamily="Roca Two"
                fontSize={{ base: "2xl", md: "3xl" }}  // Reduced font size for name
                fontWeight="bold"
                color="#800000"
                mb={2}
              >
                {member.name}
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight="500" color="#4B2E39">
                {member.role}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Members;
