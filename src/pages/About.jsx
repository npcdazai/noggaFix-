import { Box, Image, Text, VStack } from "@chakra-ui/react";
import eventbanner from "../assets/Images/eventbanner.png";
import Belive from "../components/About/Belive";
import RoadMap from "../components/About/RoadMap"
const Events = () => {
  return (
    <Box p={4}>
      <VStack
        position="relative"
        borderRadius="20px"
        overflow="hidden"
        bg="gray.100"
        w="full"
        h="300px"
        alignItems="center"
        // justifyContent="center"
      >
        <Image src={eventbanner} position="absolute" w="100%" top={0} />

        <Box
          bgColor="transparent"
          w="50%"
          display={"flex"}
          flexDirection={"column"}
          gap={6}
          // justifyContent={"center"}
          p={4}
          h={"100%"}
        >
          <Text
            as={"h1"}
            fontSize="large"
            fontWeight={"bold"}
            fontFamily={"Roca Two"}
            position={"relative"}
            color="#fff"
            bgColor="transparent"
            className="tiro-devanagari-hindi-regular"
          >
            | About us  |
          </Text>
        </Box>
      </VStack>

      <Belive/>
      <RoadMap/>
    </Box>
  );
};

export default Events;
