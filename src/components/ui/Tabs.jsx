import React, { useState } from "react";
import { Flex, Image } from "@chakra-ui/react";
import gsf from "../../assets/gsf.png";
import home from "../../assets/home.png";
import tablogo from "../../assets/tablogo.png";
import prosperty from "../../assets/prosperty.png";
import heart from "../../assets/heart.png";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState({ id: "tab1", label: "GDF" });

  const tabs = [
    { id: "tab1", label: "GDF", icon: gsf },
    { id: "tab2", label: "Home", icon: home },
    { id: "tab3", label: "Sync", icon: tablogo },
    { id: "tab4", label: "Prosperity", icon: prosperty },
    { id: "tab5", label: "View", icon: heart },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Flex justifyContent="center" alignItems="center" p={"2rem"} w="100%">
      {tabs.map((tab) => (
        <Flex
          key={tab.id}
          alignItems="center"
          justifyContent="center"
          color={activeTab.id === tab.id ? "white" : "gray.400"}
          px={"4rem"}
          py={2}
          cursor="pointer"
          borderBottom={activeTab.id === tab.id ? "2px solid #E8155D" : "none"}
          onClick={() => handleTabClick(tab)}
          transition="color 0.3s, border-bottom 0.3s"
          w="80%"
        >
          <Image
            h="22px"
            src={tab.icon}
            alt={tab.label}
            ml={2}
            filter={activeTab.id === tab.id ? "none" : "grayscale(100%)"}
          />
        </Flex>
      ))}
    </Flex>
  );
};

export default TabsComponent;
