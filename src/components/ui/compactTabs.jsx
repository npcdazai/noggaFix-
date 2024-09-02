import React, { useState } from "react";
import { Flex, Box, IconButton, Text, Image } from "@chakra-ui/react";
import { FaHome, FaSyncAlt, FaBinoculars } from "react-icons/fa";
import { SiGoogletagmanager } from "react-icons/si";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Hybrid", icon: null },
    { id: "tab2", label: "IOS", icon: null },
    { id: "tab3", label: "Andriod", icon: null },
    { id: "tab4", label: "AI/ML", icon: null },
  ];
  return (
    <Flex p={1} justifyContent="center" w="442px" >
      {tabs.map((tab) => (
        <Flex
          key={tab.id}
          alignItems="center"
          color={activeTab === tab.id ? "white" : "gray.400"}
          px={"4rem"}
          py={1}
          cursor="pointer"
          borderBottom={activeTab === tab.id ? "2px solid #E8155D" : "none"}
          onClick={() => setActiveTab(tab.id)}
          transition="color 0.3s, border-bottom 0.3s"
          w="100%"
        >
          {tab.label && <Text color="#FFFFFF" fontWeight={400} fontSize="20px">{tab.label}</Text>}
        </Flex>
      ))}
    </Flex>
  );
};

export default TabsComponent;
