import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import durgaArti from "../../assets/Images/new_Images/durjapuja.jpg";
import durgaPuja from "../../assets/Images/new_Images/durjaarti.jpg";
import murti from "../../assets/Images/new_Images/7.jpg";
import lordganesh from "../../assets/Images/new_Images/ganeshlord.jpg";
import om from "../../assets/Images/new_Images/om.png";
import line from "../../assets/icons/line.png";
import namaste from "../../assets/Images/new_Images/namaste.png";
import mandir from "../../assets/Images/new_Images/mandir.png";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const textSections = [
  {
    icon: om,
    title: "Temple",
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    icon: mandir,
    title: "Puja",
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
];

const Belive = () => {
  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach((node) => {
      if (node) {
        VanillaTilt.init(node, {
          max: 7,
          speed: 400,
          glare: true,
          "max-glare": 0.8,
        });
      }
    });

    return () => {
      tiltRefs.current.forEach((node) => {
        if (node && node.vanillaTilt) {
          node.vanillaTilt.destroy();
        }
      });
    };
  }, []);
  return (
    <Box p={8} w="100%">
      <HStack
        gap={12}
        p={8}
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack w="50%" gap={8}>
          <VStack gap={4}>
            <Image ref={(el) => (tiltRefs.current[0] = el)} src={durgaArti} />
            <Image ref={(el) => (tiltRefs.current[1] = el)} src={durgaPuja} />
          </VStack>
          <VStack gap={4}>
            <Image
              ref={(el) => (tiltRefs.current[2] = el)}
              mt="4rem"
              src={murti}
            />
            <Image ref={(el) => (tiltRefs.current[3] = el)} src={lordganesh} />
          </VStack>
        </HStack>
        <VStack w="50%" alignItems="start">
          <HStack as="span">
            <Image src={namaste} w="100px" h="100px" />
            <Text fontSize="small" color="#7E4555" fontWeight={600}>
              EDUCATION FOR ALL RURAL CHILDREN
            </Text>
          </HStack>
          <VStack as="span" alignItems="flex-start">
            <Text fontSize="x-large" fontWeight={600} color="#db4242">
              We are a Hindu that believe in Ram
            </Text>
            <HStack as="span" alignItems="flex-start" gap={3}>
              <Image src={line} h={"40px"} />
              <Text as="p" textAlign="start">
                We are a Hindu that belives in Lord Rama and Vishnu Deva the
                followers and We are a Hindu that belives in Lord Rama and
                Vishnu Deva.
              </Text>
            </HStack>

            {/* Mapping through text sections to render */}
            <VStack gap={4}>
              {textSections.map((section, index) => (
                <HStack key={index} gap={2} as="span" alignItems="flex-start">
                  <Image src={section.icon} w="50px" h="50px" />
                  <VStack alignItems="flex-start" as="span">
                    <Text fontSize="small" color="#7E4555" fontWeight={600}>
                      {section.title}
                    </Text>
                    <Text
                      textAlign="start"
                      fontSize="x-small"
                      color="#7E4555"
                      fontWeight={600}
                    >
                      {section.description}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Belive;
