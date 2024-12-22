import React, { useState, useEffect } from "react";
import { Box, Image, Heading, Text, Spinner } from "@chakra-ui/react";
import axios from "axios";
import templeImage from "../assets/Images/poojas.png";
import CommonCard from "../components/Ui/CommonCard";

const TypesOfPooja = () => {
  const [poojaData, setPoojaData] = useState([]); 
  const [loading, setLoading] = useState(true);

  // axios.defaults.baseURL = "https://ngo-backend-8yek.onrender.com";

  useEffect(() => {
    const fetchPoojas = async () => {
      try {
        const response = await axios.get("https://ngo-backend-8yek.onrender.com/api/poojas");
        setPoojaData(response.data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching poojas:", error);
        setLoading(false); 
      }
    };

    fetchPoojas(); 
  }, []); 

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" color="blue.500" />
      </Box>
    );
  }

  const cardData = poojaData.map(pooja => ({
    title: pooja.name,
    imageUrl: pooja.image,
    link: pooja.link,
  }));

  return (
    <Box w="100%" h="100%" py={8} px={6}>
      <Image
        src={templeImage}
        alt="Temple"
        width="100%"
        height="400px"
        objectFit="cover"
        borderRadius="20px"
        mb={6}
      />

      <Heading textAlign="left" size="lg" mb={4}>
        Types of Pooja
      </Heading>

      <Text fontSize="sm" textAlign="left" mb={4}>
        Our temple offers a variety of poojas to cater to the spiritual needs of
        our devotees. From daily rituals to special ceremonies, each pooja is
        performed with utmost devotion and adherence to traditional practices.
        Some of the popular poojas include Ganesh Pooja, Lakshmi Pooja, and
        Navagraha Pooja. Each pooja is designed to invoke the blessings of the
        deities and bring peace, prosperity, and happiness to the devotees.
      </Text>

      <CommonCard cardData={cardData} />
    </Box>
  );
};

export default TypesOfPooja;
