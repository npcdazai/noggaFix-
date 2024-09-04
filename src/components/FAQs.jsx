import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const FAQData = [
  {
    question:
      "What is your Agile development process for building native apps (iOS & Android) or cross-platform solutions?",
    answer:
      "You should start the App Ideation process with the most accurate preparation of your concept. Because you just think you have a wonderful idea of the app for iPhone or Android. In fact, all you have right now is just a dream and not a concrete one.",
    points: [
      "Consultation & Requirement Gathering",
      "Sprint Planning",
      "Design & Prototyping",
      "Development",
      "Testing",
      "Review & Feedback",
      "Launch & Deployment",
      "Post-Launch Support",
    ],
  },
  {
    question:
      "Do you include UI/UX design in your mobile app development services?",
    answer: "Yes, UI/UX design is integral to our services. We provide:",
    points: [
      "User Research",
      "Wireframing",
      "Visual Design",
      "Prototyping",
      "Usability Testing",
    ],
  },
  {
    question:
      "Can you provide an estimated timeline for developing a minimum viable product (MVP) or a fully-featured mobile app?",
    answer:
      "The timeline for developing a mobile app can vary based on the complexity and scope of the project. Here’s a general estimate:",
    points: [
      "MVP It typically takes 3-4 months. This includes core features essential for the initial launch and user feedback.",
      "Fully-Featured Mobile App It usually takes 6-12 months. This covers all planned features, integrations, and extensive testing for a comprehensive user experience.",
    ],
  },
  {
    question:
      "How do you integrate back-end development and APIs for a seamless mobile experience?",
    answer: "Our approach includes:",
    points: [
      "Requirement Analysis",
      "API Development",
      "Data Security",
      "Performance Optimization",
      "Testing & Validation",
      "Continuous Integration",
    ],
  },
  {
    question:
      "Do you offer transparent cost structures for mobile app development projects?",
    answer: "Yes, we provide clear pricing models that include:",
    points: [
      "Initial Consultation & Planning",
      "Design & Prototyping",
      "Development",
      "Testing & QA",
      "Maintenance & Support",
    ],
  },
];

const FAQs = () => {
  return (
    <Container maxW="container.2xl" bgColor="black" p="2.8rem">
      <Heading color="#FBFBFB" fontWeight={600} textAlign="center">
        FAQ’s
      </Heading>
      <Box bgColor="black" py={8}>
        <Accordion
          display="flex"
          flexDirection="column"
          gap={3}
          defaultIndex={[0]}
          allowMultiple
          color="#ffff"
        >
          {FAQData.map((faq, index) => (
            <AccordionItem
              key={index}
              borderTop="0px solid #E8155D"
              borderBottom="1px solid #E8155D"
            >
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontSize="25px">
                    {faq.question}
                  </Box>
                  {/* <AccordionIcon /> */}
                </AccordionButton>
              <AccordionPanel pb={4} color="#9F9F9F" fontSize="20px">
                {faq.answer}
                <Box display="flex" p={4} flexDirection="column">
                  <UnorderedList>
                    {faq.points.map((point, idx) => (
                      <ListItem key={idx}>{point}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Container>
  );
};

export default FAQs;
