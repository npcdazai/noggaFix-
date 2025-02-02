import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import bannner1 from "../../../assets/Images/banner1.jpg";
import OrangeBg from "../../../assets/logos/OrangeWallpaper.jpeg";
import asset from "../../../assets/logos/fix.png";

const FirstCard = () => {
  return (
    <Box
      bgImage={OrangeBg}
      bgSize="contain"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      py={8}
      gap={6}
      w="100%"
      h="100%"
      borderRadius="20px"
      position="relative"
      px={{ base: 4, md: 8 }} // Padding for different screen sizes
    >
      <Image opacity="0.5" bottom={0} src={asset} w="100%" position="absolute" />
      <Box
        bgColor="transparent"
        w={{ base: "100%", md: "50%" }} // Full width on mobile, half width on larger screens
        display="flex"
        flexDirection="column"
        gap={6}
        p={4}
        h="100%"
      >
        <Text
          as="h1"
          fontSize={{ base: "36px", md: "54px" }} // Responsive font size
          fontWeight="bold"
          fontFamily="Roca Two"
          position="relative"
          color="#800000"
          bgColor="transparent"
          className="tiro-devanagari-hindi-regular"
        >
          शिवशक्ति{" "}
          <Text
            className="tiro-devanagari-hindi-regular"
            bgColor="transparent"
            as="span"
            color="#333"
          >
            कालका सनातन{" "}
          </Text>
          सेवा संस्था{" "}
        </Text>

        <Text
          bgColor="transparent"
          as="span"
          fontSize={{ base: "md", md: "lg" }} // Responsive font size
          fontWeight={500}
          className="tiro-devanagari-hindi-regular"
        >
          बिकईया धाम ज्ञानपुर-भदोही, उत्तर प्रदेश
        </Text>

        <Box
          bgColor="transparent"
          display="flex"
          justifyContent="center"
          flexDirection={{ base: "column", sm: "row" }} // Stack buttons on small screens
          gap={4}
        >
          <Button
            display="flex"
            alignItems="center"
            gap={3}
            rounded="full"
            color="#fff"
            px={8}
            py={4}
            fontSize="md"
            size="lg"
            transition="0.5s all"
            bgColor="#800000"
            _hover={{
              bg: "#800000",
              transform: "translateY(-6px)",
            }}
            className="tiro-devanagari-hindi-regular"
          >
            Donate
          </Button>

          <Button
            display="flex"
            alignItems="center"
            gap={3}
            rounded="full"
            color="#fff"
            px={8}
            py={4}
            fontSize="md"
            size="lg"
            transition="0.5s all"
            bgColor="#800000"
            _hover={{
              bg: "#800000",
              transform: "translateY(-6px)",
            }}
            className="tiro-devanagari-hindi-regular"
          >
            About Us
          </Button>
        </Box>

        <Text
          bgColor="transparent"
          as="span"
          fontSize={{ base: "1rem", md: "1.25rem" }} // Responsive font size
          color="#fff"
          className="m-plus-rounded-1c-regular"
        >
          Jai kalka maa
        </Text>
      </Box>

      <Box
        sx={{
          clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
        }}
        bg="tomato"
        width={{ base: "100%", md: "50%" }} // Full width on mobile, half width on larger screens
        height="100%"
        overflow="hidden"
        borderRadius="md"
      >
        <Image src={bannner1} width="100%" height="100%" objectFit="cover" />
      </Box>
    </Box>
  );
};

export default FirstCard;
