import { Container, Flex,  Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import Hybrid from "../OS/Hybrid";
const HybridComponent = () => <Hybrid/>;
const IOSComponent = () => <div>IOS Content</div>;
const AndriodComponent = () => <div>Sync Content</div>;
const AIMLComponent = () => <div>Prosperity Content</div>;

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState({
    id: "tab1",
    label: "GDF",
    component: HybridComponent,
  });

  const tabs = [
    { id: "tab1", label: "Hybrid", component: HybridComponent },
    { id: "tab2", label: "iOS", component: IOSComponent },
    { id: "tab3", label: "Android", component: AndriodComponent },
    { id: "tab4", label: "AI/ML", component: AIMLComponent },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const ActiveTabComponent = activeTab.component;

  return (
    <Container>
      <Flex  p={1} justifyContent="center" w="100%">
        {tabs.map((tab) => (
          <Flex
            key={tab.id}
            direction="column"
            alignItems="center"
            justifyContent="center"
            color={activeTab.id === tab.id ? "white" : "gray.400"}
            px={{ base: "2rem", md: "4rem" }}
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
            {/* <Image
              h="24px"
              src={tab.icon}
              alt={tab.label}
              filter={activeTab.id === tab.id ? "none" : "grayscale(100%)"}
              transition="filter 0.3s"
            /> */}
            <Text mt={2} fontSize="sm" fontWeight="bold">
              {tab.label}
            </Text>
          </Flex>
        ))}
      </Flex>
        <Box borderBottom="1px solid #E0E0E0" w={"100%"} />
      <Box maxW="container.md" mt="2rem">
        <ActiveTabComponent />
      </Box>
      
    </Container>
  );
};

export default TabsComponent;
