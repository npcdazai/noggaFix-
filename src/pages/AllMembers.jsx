import React, { useState, useEffect } from "react";
import axios from "axios";
import MembersCard from "../components/Ui/MemberCard";
import eventbanner from "../assets/Images/eventbanner.png";
import Explore from "../components/Explore";
import { Box, Text, VStack, Spinner } from "@chakra-ui/react";

const AllMembers = () => {
  const [membersData, setMembersData] = useState([]); 
  const [loading, setLoading] = useState(true);
  axios.defaults.baseURL = "https://ngo-backend-8yek.onrender.com"; 

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("/api/members"); 
        setMembersData(response.data); 
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching members:", error);
        setLoading(false); 
      }
    };
  
    fetchMembers();
  }, []);  
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" color="blue.500" />
      </Box>
    );
  }

  return (
    <Box p={4} display="flex" flexWrap="wrap" bgColor="#fffaf0">
      <VStack
        position="relative"
        borderRadius="20px"
        overflow="hidden"
        bg="gray.100"
        w="full"
        h="300px"
        alignItems="center"
        bgImage={eventbanner}
        bgSize={"cover"}
        p={8}
        mb={8}
      >
        <Box
          bgColor="transparent"
          w="100%"
          display={"flex"}
          flexDirection={"column"}
          gap={6}
          p={4}
          h={"100%"}
        >
          <Text
            as={"h1"}
            fontSize="x-large"
            fontWeight={"bold"}
            fontFamily={"Roca Two"}
            position={"relative"}
            color="#fff"
            bgColor="transparent"
            className="tiro-devanagari-hindi-regular"
          >
            Volunteers
          </Text>

          <Text
            bgColor="transparent"
            as={"span"}
            fontSize={"1rem"}
            color={"#fff"}
            className="m-plus-rounded-1c-regular"
          >
            Jai Kalka Maa
          </Text>
        </Box>
      </VStack>
      {membersData.map((val, index) => {
        return (
          <Box key={index}>
            <MembersCard name={val.name} img={val.image} role={val.role} />
          </Box>
        );
      })}
      <Explore />
    </Box>
  );
};

export default AllMembers;
