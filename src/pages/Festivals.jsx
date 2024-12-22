import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import eventbanner from "../assets/Images/eventbanner.png";
import EventInfo from "../components/Events/EventInfo";
import EventVital from "../components/Events/EventVital";
import BentoGrid from "../components/Ui/BentoGrid";
import pooja from "../assets/Images/pooja.png";
import diwali from "../assets/Images/diwali.png";
import program from "../assets/Images/program.png";
import event from "../assets/Images/event.png";
import kalash from "../assets/Images/new_Images/kalsh.png";
import puja from "../assets/Images/new_Images/pujaEvent.jpg";
import parsad from "../assets/Images/new_Images/parsadevent.jpg";
import marraige from "../assets/Images/new_Images/marriage.jpg";
import mahaparsad from "../assets/Videos/test.mp4";

const cardData = [
  {
    title: "Pooja",
    description: "Description for Pooja",
    imageUrl: pooja,
    festName: "Diwali",
  },
  {
    title: "Festival",
    description: "Description for Festival",
    imageUrl: diwali,
    link: "/event",
    festName: "Diwali",
  },
  {
    title: "Program",
    description: "Description for Ceremony",
    imageUrl: program,
    link: "/event",
    festName: "Diwali",
  },
  {
    title: "Event",
    description: "Description for Event",
    imageUrl: event,
    link: "/event",
    festName: "Diwali",
  },
];

const info = [
  {
    id: 1,
    img: puja,
    title: "Puja",
    description:
      "You should be able to find several indispensable facts about motivation in the following paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make. It’s so difficult to go on when everything seems to fail, isn’t it.",
    dateTime: "Sunday (8:00 am - 9:00 am)",
    location: "56 Thatcher Avenue River Forest",
    vidurl: mahaparsad,
  },
  {
    id: 2,
    img: parsad,
    title: "Puja",
    description:
      "You should be able to find several indispensable facts about motivation in the following paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make. It’s so difficult to go on when everything seems to fail, isn’t it.",
    dateTime: "Sunday (8:00 am - 9:00 am)",
    location: "56 Thatcher Avenue River Forest",
    vidurl: mahaparsad,
  },
  {
    id: 3,
    img: marraige,
    title: "Puja",
    description:
      "You should be able to find several indispensable facts about motivation in the following paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it might make. It’s so difficult to go on when everything seems to fail, isn’t it.",
    dateTime: "Sunday (8:00 am - 9:00 am)",
    location: "56 Thatcher Avenue River Forest",
    vidurl: mahaparsad,
  },
];

const Festivals = () => {
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
        bgImage={eventbanner}
        bgSize={"cover"}
        p={8}
        mb={8}
      >
        <Box
          bgColor="transparent"
          w="100%"
          display={"flex"}
          flexDirection={"column"}
          gap={6}
          p={4}
          h={"100%"}
        >
          <Text
            as={"h1"}
            fontSize="x-large"
            fontWeight={"bold"}
            fontFamily={"Roca Two"}
            position={"relative"}
            color="#fff"
            bgColor="transparent"
            className="tiro-devanagari-hindi-regular"
          >
            FESTIVALS
          </Text>

          <Text
            bgColor="transparent"
            as={"span"}
            fontSize={"1rem"}
            color={"#fff"}
            className="m-plus-rounded-1c-regular"
          >
            Jai kalka maa
          </Text>
        </Box>
      </VStack>

      <HStack w="100%" alignItems="flex-start">
        <VStack w="60%" h="800px" overflowY="scroll">
          {info.map((val) => {
            return (
              <EventInfo
                key={val.id}
                dateTime={val.dateTime}
                description={val.description}
                img={val.img}
                location={val.location}
                title={val.title}
                vidurl={val.vidurl}
              />
            );
          })}
        </VStack>
        <VStack w="40%" h="800px" overflowY="scroll">
          {cardData.map((val) => {
            return (
              <BentoGrid
                title={val.title}
                img={val.imageUrl}
                festivalName={val.festName}
                description={val.description}
                key={val.id}
              />
            );
          })}
        </VStack>
      </HStack>
    </Box>
  );
};

export default Festivals;
