import { Box, Flex, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slider1 from "../../assets/Images/members/images/mainbab.jpg";
import slider2 from "../../assets/Images/members/images/person1.jpg";
import slider3 from "../../assets/Images/members/images/pp3.jpg";
import slider4 from "../../assets/Images/members/images/pp4.jpg";
import slider5 from "../../assets/Images/members/images/pp5.jpg";
import slider6 from "../../assets/Images/members/images/pp6.jpg";
import slider7 from "../../assets/Images/members/images/pp2.jpg";
import freepik from "../../assets/logos/fix.png";

const EstemedMembers = () => {
  const membersData = [
    { name: "Royal Rudra JI Maharaj", role: "Renowned Scholar and Guide", image: slider1 },
    { name: "Acharya Atul Tiwari", role: "प्रबंधक अध्यक्ष (Head Administrator)", image: slider2 },
    { name: "Anand Tiwari", role: "कोषादायाछ (Treasurer)", image: slider3 },
    { name: "Shivam Tiwari", role: "धर्माचार्य (Media Head)", image: slider4 },
    { name: "Deepak Shukla", role: "Organisation minister", image: slider5 },
    { name: "Dhanesh Chandra Dubey", role: "Organisation minister", image: slider6 },
    { name: "Pradeep Tiwari", role: "Treasurer", image: slider7 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % membersData.length); // Change every 5 seconds
    }, 5000);
    return () => clearInterval(interval);
  }, [membersData.length]);

  const visibleMembers = [
    membersData[currentIndex],
    membersData[(currentIndex + 1) % membersData.length],
    membersData[(currentIndex + 2) % membersData.length],
  ];

  const visibleMembersMobile = [
    membersData[currentIndex],
    membersData[(currentIndex + 1) % membersData.length],
  ];

  return (
    <Box
      id="mainmembers"
      bgRepeat="no-repeat"
      flexDirection="column"
      alignItems="center"
      py={6}
      bgColor="#ffb75247"
      borderRadius="20px"
      w="100%"
      h="100%"
      overflow="hidden"
      position="relative"
      zIndex={1}
    >
      <Image
        opacity="0.5"
        bottom={0}
        src={freepik}
        zIndex={"-1"}
        w="100%"
        position="absolute"
      />
      <Flex justify="center" w="100%">
        <AnimatePresence mode="wait">
          {/* Motion div for the entire SimpleGrid */}
          <motion.div
            key={currentIndex} // Key based on the currentIndex so the whole group re-renders
            initial={{ opacity: 0, transform: "translateX(50px)" }} // Start off-screen
            animate={{ opacity: 1, transform: "translateX(0)" }} // Fade in and slide in
            exit={{ opacity: 0, transform: "translateX(-50px)" }} // Fade out and slide out
            transition={{
              type: "spring",
              stiffness: 100,  // Increased stiffness for faster transition
              damping: 15,     // Lower damping for faster movement
              delay: 0.1,      // Slightly reduced delay for quicker transitions
            }}
          >
            <SimpleGrid
              columns={{ base: 2, lg: 3 }}
              spacing={{ base: 4, lg: 8 }}
            >
              {(window.innerWidth <= 768 ? visibleMembersMobile : visibleMembers).map(
                (event, index) => (
                  <VStack gap={4} key={event.name}>
                    <Box
                      h={{ base: "120px", lg: "180px" }}
                      w={{ base: "120px", lg: "180px" }}
                      borderRadius="50%"
                      boxShadow="md"
                      overflow="hidden"
                    >
                      <Image h="100%" w="100%" src={event.image} alt={event.name} />
                    </Box>
                    <VStack
                      alignItems="center"
                      justifyContent="center"
                      borderWidth="1px"
                      borderRadius="20px"
                      overflow="hidden"
                      bg="white"
                      w={{ base: "160px", md: "180px" }}
                    >
                      <Box padding="3">
                        <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="bold" textAlign="left">
                          {event.name}
                        </Text>
                        <Text fontSize={{ base: "xx-small", md: "x-small" }} textAlign="left">
                          {event.role}
                        </Text>
                      </Box>
                    </VStack>
                  </VStack>
                )
              )}
            </SimpleGrid>
          </motion.div>
        </AnimatePresence>
      </Flex>
    </Box>
  );
};

export default EstemedMembers;
