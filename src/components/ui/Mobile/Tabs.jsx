import { Container, Flex, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import Hybrid from "../../OS/HybridMobile";

const HybridComponent = () => <Hybrid />;
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
    <Box display="flex" alignItems="center" flexDirection="column" w="100%" p={4}>
      <Flex
        w="100%"
        justifyContent="space-around"
        px={["1rem", "3rem", "6rem"]}
        py={2}
        alignItems="center"
        flexDirection={"row"}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
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
            w={["100%", "auto"]}
            textAlign="center"
            px={[4, 2]} 
          >
            <Text mt={2} fontSize={["14px", "16px", "20px"]} fontWeight="bold"> 
              {tab.label}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Box borderBottom="1px solid #E0E0E0" w="100%" />
      <Box w="100%" maxW="container.xl" p={[2, 4]}> 
        <ActiveTabComponent />
      </Box>
    </Box>
  );
};

export default TabsComponent;
