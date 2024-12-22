import {
  Box,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import eventbanner from "../assets/Images/cows.png";
import grass from "../assets/Images/cow-Offering/greass.png";
import fruits from "../assets/Images/cow-Offering/fruits.png";
import grains from "../assets/Images/cow-Offering/grains.png";
import daily from "../assets/Images/cow-Offering/dailyfeed.png";
import monthy from "../assets/Images/cow-Offering/monthly.png";
import weekl from "../assets/Images/cow-Offering/Weekl.png";
import ServicesRow from "../components/ServicesRow";
import cowpaw from "../assets/Images/cow-Offering/cowpaw.png";
import dollars from "../assets/Images/cow-Offering/dollars.png";
import thickLine from "../assets/icons/singleline.png";
import om from "../assets/Images/new_Images/om.png";
import arti from "../assets/Images/new_Images/arti.jpg";
import pujjan from "../assets/Images/new_Images/pujaan.jpg";
import { borderBottom } from "../styles/borderBottom";
import kalash from "../assets/Images/new_Images/kalsh.png";

const CowOffering = () => {
  const cow = [
    {
      imageUrl: grass,
      title: "Grass Bundle",
      description: "Various Pooja services offered.",
    },
    {
      imageUrl: fruits,
      title: "Fruits",
      description: "Nutritious fruits for energy and health",
    },
    {
      imageUrl: grains,
      title: "Special Feed",
      description: "Enhanced feed mixture for extra nutrients",
    },
    {
      imageUrl: grass,
      title: "Grass Bundle",
      description: "Various Pooja services offered.",
    },
  ];
  const fed = [
    {
      imageUrl: daily,
      title: "Daily Feed",
      description: "Set up a daily donation for feeding the cows",
    },
    {
      imageUrl: weekl,
      title: "Weekly Feed",
      description: "Set up a weekly donation for feeding the cows",
    },
    {
      imageUrl: monthy,
      title: "Monthly Feed",
      description: "Set up a monthly donation for feeding the cows",
    },
    {
      imageUrl: weekl,
      title: "Weekly Feed",
      description: "Set up a weekly donation for feeding the cows",
    },
  ];

  const cardData = [
    {
      title: "Pooja",
      description: "Description for Pooja",
      imageUrl: arti,
    },
    {
      title: "Festival",
      description: "Description for Festival",
      imageUrl: pujjan,
    },
  ];
  return (
    <VStack gap={4} p={4}>
      <VStack
        position="relative"
        borderRadius="20px"
        overflow="hidden"
        bg="gray.100"
        w="full"
        h="300px"
        alignItems="center"
        bgImage={eventbanner}
        bgSize={"contain"}
        p={8}
        mb={8}
      >
        <Box
          bgColor="transparent"
          w="100%"
          display={"flex"}
          flexDirection={"column"}
          gap={6}
          // justifyContent={"center"}
          p={4}
          h={"100%"}
        >
          <Text
            as={"span"}
            fontSize="x-large"
            fontWeight={"bold"}
            fontFamily={"Roca Two"}
            position={"relative"}
            color="#fff"
            bgColor="transparent"
            className="tiro-devanagari-hindi-regular"
          >
            Your offerings make a difference
          </Text>

          <Text
            bgColor="transparent"
            as={"span"}
            fontSize={"sm"}
            color={"#fff"}
            className="m-plus-rounded-1c-regular"
          >
            Offer your service to the holy cows of our temple
          </Text>
        </Box>
      </VStack>
      <ServicesRow
        title={"Choose Your Offering"}
        des={
          "Select from a variety of items that you can offer to our sacred cows."
        }
        arr={cow}
      />
      <ServicesRow
        title={"Support Regularly"}
        des={
          "Ensure continuous care for the cows by setting up a recurring donation."
        }
        arr={fed}
      />
      <HStack
        pt={8}
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        gap={12}
      >
        <VStack w="50%" alignItems="flex-end">
          <HStack alignItems="center">
            <Image src={om} height="18px" />
            <Text
              textAlign="end"
              color="#7E4555"
              fontSize="large"
              fontWeight={600}
            >
              WAYS WE CAN HELP
            </Text>
          </HStack>
          <Text
            width={"70%"}
            textAlign="end"
            color="#db4242"
            fontSize="48px"
            fontWeight={700}
          >
            Angels Ready To Help
          </Text>
        </VStack>
        <Image src={thickLine} />
        <Text w="50%" textAlign="start" color="#db4242" fontWeight={600} fontSize="medium">
          Our mission is to share the Good of Hinduism, Loving, Faith and
          Serving. People ask questions related to Hinduism.
        </Text>
      </HStack>
      <SimpleGrid gap={12} columns={[2]} spacing={10}>
        {cardData.map((card, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="20px"
            overflow="hidden"
            bg="white"
            {...borderBottom}
          >
            <Box
              h="80%"
              w="100%"
              position="relative"
              overflow="hidden"
              _hover={{
                cursor: "pointer",
                transform: "scale(1.05)",
                boxShadow: "lg",
                animation: "scaleUp 0.3s ease-in-out",
              }}
              transition="transform 0.3s, box-shadow 0.3s"
              
            >
              <Image
                src={card.imageUrl}
                alt={card.title}
                h="full"
                w="full"
                objectFit="cover"
              />

              <Box
                position="absolute"
                top="0"
                left="0"
                h="full"
                w="full"
                bg="rgba(0, 0, 0, 0.5)"
                opacity="0"
                transition="opacity 0.3s ease-in-out"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _hover={{ opacity: 1 }}
              >
                <Image src={kalash} h="200px"/>
              </Box>
            </Box>

            <Box padding="4">
              <Text fontWeight="bold" textAlign="left">
                {card.title}
              </Text>
              <Text fontSize="sm" textAlign="left">
                {card.description}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default CowOffering;
