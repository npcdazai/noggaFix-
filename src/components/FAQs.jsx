import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const FAQData = [
  {
    question: "I Have An App Idea, What Do I Do Next?",
    answer:
      "You should start the App Ideation process with the most accurate preparation of your concept. Because you just think you have a wonderful idea of the app for iPhone or Android. In fact, all you have right now is just a dream and not a concrete one.",
  },
  {
    question: "Can I Hire WDI To Just Do The Prototype For My Project?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "I Have An App Idea, What Do I Do Next?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const FAQs = () => {
  return (
      <Container maxW="container.2xl" bgColor="black" p="2.8rem" >
        <Heading color="#FBFBFB" fontWeight={600} textAlign="center">
          FAQ’s
        </Heading>
        <Box bgColor="black" py={8}>
          <Accordion  display="flex" flexDirection="column" gap={3} defaultIndex={[0]} allowMultiple color="#ffff">
            {FAQData.map((faq, index) => (
              <AccordionItem
                key={index}
                borderTop="0px solid #E8155D"
                borderBottom="1px solid #E8155D"
              >
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" fontSize="25px">
                      {faq.question}
                    </Box>
                    {/* <AccordionIcon /> */}  {/* Accordion Icon  */}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="#9F9F9F" fontSize="20px">
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Container>
  );
};

export default FAQs;
