// import React, { useState } from "react";
// import {
//   Flex,
//   Box,
//   IconButton,
//   Text,
//   Image,
//   Container,
// } from "@chakra-ui/react";
// import { FaHome, FaSyncAlt, FaBinoculars } from "react-icons/fa";
// import { SiGoogletagmanager } from "react-icons/si";

// const TabsComponent = () => {
//   const [activeTab, setActiveTab] = useState("tab1");

//   const tabs = [
//     { id: "tab1", label: "Hybrid", icon: null },
//     { id: "tab2", label: "IOS", icon: null },
//     { id: "tab3", label: "Andriod", icon: null },
//     { id: "tab4", label: "AI/ML", icon: null },
//   ];
//   return (
//     <Container>
//       <Flex p={1} justifyContent="center" w="442px">
//         {tabs.map((tab) => (
//           <Flex
//             key={tab.id}
//             alignItems="center"
//             color={activeTab === tab.id ? "white" : "gray.400"}
//             px={"4rem"}
//             py={1}
//             cursor="pointer"
//             borderBottom={activeTab === tab.id ? "2px solid #E8155D" : "none"}
//             onClick={() => setActiveTab(tab.id)}
//             transition="color 0.3s, border-bottom 0.3s"
//             w="100%"
//           >
//             {tab.label && (
//               <Text color="#FFFFFF" fontWeight={400} fontSize="20px">
//                 {tab.label}
//               </Text>
//             )}
//           </Flex>
//         ))}
//       </Flex>
//     </Container>
//   );
// };

// export default TabsComponent;

// import React, { useState } from "react";
import { Container, Flex, Image, Box, Text } from "@chakra-ui/react";
import { useState } from "react";

const HybridComponent = () => <div>Home Content</div>;
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
      <Flex p={1} justifyContent="center" w="442px">
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
      <Box maxW="container.md" mt="2rem">
        <ActiveTabComponent />
      </Box>
    </Container>
  );
};

export default TabsComponent;
