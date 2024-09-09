import React, { useState } from "react";
import { Container, Flex, Image, Box, Text } from "@chakra-ui/react";
import gsf from "../../assets/gsf.png";
import home from "../../assets/home.png";
import tablogo from "../../assets/regc.png";
import prosperty from "../../assets/prosperty.png";
import heart from "../../assets/wokap.png";
import GSF from "../Timelines/Gsf";
import Simpletend from "../Timelines/Simpletend";
import ReGroup from "../Timelines/ReGroup";
import Prosperty from "../Timelines/Prosperty";
import Woka from "../Timelines/Woka";

const GDFComponent = () => <GSF />;
const HomeComponent = () => <Simpletend />;
const SyncComponent = () => <ReGroup />;
const ProsperityComponent = () => <Prosperty />;
const ViewComponent = () => <Woka />;

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState({
    id: "tab1",
    label: "GDF",
    component: GDFComponent,
  });

  const tabs = [
    { id: "tab1", label: "GDF", icon: gsf, component: GDFComponent },
    { id: "tab2", label: "Home", icon: home, component: HomeComponent },
    { id: "tab3", label: "Sync", icon: tablogo, component: SyncComponent },
    {
      id: "tab4",
      label: "Prosperity",
      icon: prosperty,
      component: ProsperityComponent,
    },
    { id: "tab5", label: "View", icon: heart, component: ViewComponent },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const ActiveTabComponent = activeTab.component;

  return (
    <Container maxW="container.2xl" p="2rem">
      <Flex justifyContent="center" alignItems="center" w="100%">
        {tabs.map((tab) => (
          <Flex
            key={tab.id}
            direction="column"
            alignItems="center"
            justifyContent="center"
            color={activeTab.id === tab.id ? "white" : "gray.400"}
            px={{ base: "1rem", md: "3rem" }}
            py={2}
            cursor="pointer"
            borderBottom={
              activeTab.id === tab.id ? "2px solid #E8155D" : "none"
            }
            onClick={() => handleTabClick(tab)}
            transition="color 0.3s, border-bottom 0.3s"
            _hover={{ color: "white" }}
            w="20%"
          >
            <Image
              w="auto"
              h="30px"
              src={tab.icon}
              alt={tab.label}
              filter={activeTab.id === tab.id ? "none" : "grayscale(100%)"}
              transition="filter 0.3s"
            />
            {/* <Text mt={2} fontSize="sm" fontWeight="bold">
              {tab.label}
            </Text> */}
          </Flex>
        ))}
      </Flex>
      <Box maxW="container.xl" mt="2rem">
        <ActiveTabComponent />
      </Box>
    </Container>
  );
};

export default TabsComponent;
