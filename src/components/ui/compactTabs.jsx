import { Container, Flex, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import Hybrid from "../OS/Hybrid";
import Ios from "../OS/IOS"
import Android from "../OS/Android"
import AiMl from "../OS/AIML"
const HybridComponent = () => <Hybrid />;
const IOSComponent = () => <Ios/>;
const AndriodComponent = () => <Android/>;
const AIMLComponent = () => <AiMl/>;

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState({
    id: "tab1",
    label: "GDF",
    component: HybridComponent,
  });

  const tabs = [
    { id: "tab1", label: "Hybrid", component: HybridComponent },
    { id: "tab2", label: "IOS", component: IOSComponent },
    { id: "tab3", label: "Android", component: AndriodComponent },
    { id: "tab4", label: "AI/ML", component: AIMLComponent },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const ActiveTabComponent = activeTab.component;

  return (
    <Box display="flex" alignItems="center" flexDirection="column" w="100%">
      <Flex w="50%"  px={"6rem"} py={"3px"} alignItems="center">
        {tabs.map((tab) => (
          <Flex
            key={tab.id}
            direction="column"
            alignItems="center"
            justifyContent="center"
            color={activeTab.id === tab.id ? "white" : "gray.400"}
            py={2}
            cursor="pointer"
            borderBottom={
              activeTab.id === tab.id ? "2px solid #E8155D" : "none"
            }
            onClick={() => handleTabClick(tab)}
            transition="color 0.3s, border-bottom 0.3s"
            _hover={{ color: "white" }}
            w="50%"
          >
            {/* <Image
              h="24px"
              src={tab.icon}
              alt={tab.label}
              filter={activeTab.id === tab.id ? "none" : "grayscale(100%)"}
              transition="filter 0.3s"
            /> */}
            <Text mt={2} fontSize="20px" fontWeight="bold">
              {tab.label}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Box borderBottom="1px solid #E0E0E0" w={"100%"} />
      <Box maxW="container.2xl">
        <ActiveTabComponent />
      </Box>
    </Box>
  );
};

export default TabsComponent;
