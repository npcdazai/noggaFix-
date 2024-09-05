import reGroup from "../../../assets/images/regroup.png";
import compact from "../../../assets/images/compactible.png";
import compulation from "../../../assets/compulation.png";
import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Center,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import regrouplogo from "../../../assets/regrouplogo.png";
import compactHome from "../../../assets/compactHome.png";
import wokalogo from "../../../assets/wokalogo.png";
import regrouplogos from "../../../assets/regrouplogos.png";
import hoeVector from "../../../assets/homelogo.png";

function App() {
  const [selectedBox, setSelectedBox] = useState("box1");
  const [selectedText, setSelectedText] = useState("text1");
  const [selectedLogo, setSelectedLogo] = useState("logo1");

  const backgrounds = {
    box1: `url(${reGroup})`,
    box2: `url(${compact})`,
    box3: `url(${compulation})`,
  };

  const backgroundsTexts = {
    text1: "Computational Algorithm Sports Event Management",
    text2: "Computational Algorithm Sports Event Management",
    text3: "Computational Algorithm Sports Event Management",
    logo1: regrouplogos,
    logo2: hoeVector,
    logo3: wokalogo,
  };

  const getBoxSize = (box) => (selectedBox === box ? "120px" : "90px");
  const getBoxHeight = (box) => (selectedBox === box ? "180px" : "130px");

  return (
    <Box position="relative" h="450px" overflow="hidden" p="2rem" width="100%">
      <AnimatePresence>
        {selectedBox && (
          <motion.div
            key={selectedBox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: backgrounds[selectedBox],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
      </AnimatePresence>
      <Center h="100%" position="relative">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          flexDirection="column"
          gap="2"
        >
          {selectedText && (
            <motion.div
              key={selectedText}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <Box display="flex" flexDirection="column" alignItems="center" w="200px">
                <Image w="85px" src={backgroundsTexts[selectedLogo]} />
                <Text
                  fontWeight={500}
                  fontSize="16px"
                  color="#fff"
                  textAlign="center"
                >
                  {backgroundsTexts[selectedText]}
                </Text>
              </Box>
            </motion.div>
          )}

          <Box
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="2"
            p={8}
          >
            {/* Box 1 */}
            <motion.div
              layout
              transition={{ type: "tween", stiffness: 300, damping: 20 }}
            >
              <Box
                w={getBoxSize("box1")}
                h={getBoxHeight("box1")}
                bg="red.500"
                onClick={() => {
                  setSelectedBox("box1");
                  setSelectedText("text1");
                  setSelectedLogo("logo1");
                }}
                cursor="pointer"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="md"
                shadow="lg"
                bgGradient="linear(to-b, #1F4958, #D90B2E)"
                transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "2xl",
                }}
              >
                <Image src={regrouplogo} w="35px" />
              </Box>
            </motion.div>

            {/* Box 2 */}
            <motion.div
              layout
              transition={{ type: "tween", stiffness: 300, damping: 20 }}
            >
              <Box
                w={getBoxSize("box2")}
                h={getBoxHeight("box2")}
                bg="blue.500"
                onClick={() => {
                  setSelectedBox("box2");
                  setSelectedText("text2");
                  setSelectedLogo("logo2");
                }}
                cursor="pointer"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="md"
                shadow="lg"
                bgGradient="linear(to-b, blue.300, blue.600)"
                transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "2xl",
                }}
              >
                <Image src={compactHome} w="25px" />
              </Box>
            </motion.div>

            {/* Box 3 */}
            <motion.div
              layout
              transition={{ type: "tween", stiffness: 300, damping: 20 }}
            >
              <Box
                w={getBoxSize("box3")}
                h={getBoxHeight("box3")}
                bg="purple.500"
                onClick={() => {
                  setSelectedBox("box3");
                  setSelectedText("text3");
                  setSelectedLogo("logo3");
                }}
                cursor="pointer"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="md"
                shadow="lg"
                bgGradient="linear(to-b, #4F1D8F, #3A1266)"
                transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "2xl",
                }}
              >
                <Image src={wokalogo} w="25px" />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}

export default App;
