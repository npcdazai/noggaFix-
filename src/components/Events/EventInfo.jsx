import { Box, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import puja from "../../assets/Images/new_Images/pujaEvent.jpg";
import parsad from "../../assets/Images/new_Images/parsadevent.jpg";
import marraige from "../../assets/Images/new_Images/marriage.jpg";
import mahaparsad from "../../assets/Videos/test.mp4";
import { CiClock1 } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { AspectRatio } from "@chakra-ui/react";

const EventInfo = ({ img, title, description, dateTime, location , vidurl ,id }) => {

  return (
    <Box p={8}>
      <VStack
        key={id}
        boxShadow="md"
        borderRadius="md"
        overflow="hidden"
        mb={6}
        align="stretch"
      >
        <Box
          h="300px"
          overflow="hidden"
          transform="scale(1.05)"
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{
            // transform: "scale(1.05)",
            boxShadow: "lg",
          }}
        >
          {/* <Image src={event.img} w="100%" h="100%" objectFit="cover" /> */}
          <AspectRatio bg="bg.muted" ratio={16 / 9}>
            <iframe title="ngo-vid" src={mahaparsad} allowFullScreen muted  />
          </AspectRatio>
        </Box>
        <Box p={4}>
          <Text
            color="#db4242"
            textAlign="start"
            fontSize="xl"
            fontWeight="bold"
            mb={2}
          >
            {title}
          </Text>
          <Text textAlign="start" fontSize="sm" mb={4}>
            {description}
          </Text>
          <HStack spacing={2} mb={2}>
            <Icon color="gray.600" as={CiClock1} />
            <Text color="#db4242" fontSize="sm">
              {dateTime}
            </Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={IoLocationSharp} color="gray.600" />
            <Text fontSize="sm" color="#db4242">
              {location}
            </Text>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default EventInfo;
