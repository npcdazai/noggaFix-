import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  UnorderedList,
  ListItem,
  Input,
  Container,
} from "@chakra-ui/react";
import React from "react";
import pdf from "../../../assets/pdf.png";
import linkedin from "../../../assets/linkden.png";
import twitter from "../../../assets/tweeter.png";
import insta from "../../../assets/insta.png";
import fb from "../../../assets/facebook.png";
import logo from "../../../assets/wdilogo.png";
import star from "../../../assets/5star.png";
// import CusButton from "../Button";
const footerData = [
  {
    id: 1,
    title: "Services",
    items: [
      "Mobile App Development",
      "iOS App Development",
      "Android App Development",
      "Native App Development",
      "Hybrid App Development",
    ],
  },
  {
    id: 2,
    title: "Expertise",
    items: ["Technology", "Solutions"],
  },
  {
    id: 3,
    title: "Industries",
    items: ["Fintech", "Healthcare", "Real Estate", "Education"],
  },
  {
    id: 4,
    title: "Company",
    items: [
      "Services",
      "Hire Developers",
      "Technologies",
      "Solutions",
      "Blogs",
      "Podcast",
    ],
  },
  {
    id: 5,
    title: "Insights",
    items: ["Fintech", "Healthcare", "Real Estate", "Education", "Travel"],
  },
];

const FooterCom = () => {
  return (
    <Container
      maxW="contianer.2xl"
      bgColor="#1A1A1A"
      p="2rem"
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      w="100%"
      alignItems="center"
    >
      <Box w="80%" display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={"4rem"}>
        {footerData.map((val) => (
          <Box w="100%" key={val.id} gap="1rem">
            <Heading
              gridColumn="span 1"
              color="#FFFFFF"
              fontSize="20px"
              fontWeight="700"
              mb="1rem"
            >
              {val.title}
            </Heading>
            {val.items.map((item, index) => (
              <UnorderedList key={index} styleType="none" m="0" p="0">
                <ListItem mb="0.5rem">
                  <Text
                    color="#E6E6E6"
                    fontSize="16px"
                    fontWeight="400"
                    _hover={{ color: "#E5195E", cursor: "pointer" }}
                  >
                    {item}
                  </Text>
                </ListItem>
              </UnorderedList>
            ))}
          </Box>
        ))}

        <Box display="flex" flexDirection="column" alignItems="flex-start" gap={6}>
          <Image src={logo} w={"56px"} h="57px" />
          <Text
            _hover={{ color: "#E5195E", cursor: "pointer" }}
            color="#E6E6E6"
            fontWeight={300}
            fontSize="small"
          >
            ©Copyright 2023 WDIPL – Software company. All rights reserved
          </Text>
          <Text
            _hover={{ color: "#E5195E", cursor: "pointer" }}
            textDecoration="underline"
            color="#E6E6E6"
            fontWeight={300}
            fontSize="14px"
          >
            Cookies Policy
          </Text>
          <Text
            _hover={{ color: "#E5195E", cursor: "pointer" }}
            textDecoration="underline"
            color="#E6E6E6"
            fontWeight={300}
            fontSize="14px"
          >
            Privacy Policy
          </Text>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={6}
        mt={"3rem"}
      >
        <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
          <Text color="#FFFFFF" fontWeight="400" fontSize="18px">
            Download Corporate Profile
          </Text>
          <Button
            display="flex"
            justifyContent="flex-start"
            width="237px"
            borderRadius="1px"
            bgColor="#E5195E"
            alignItems="center"
            height="38px"
            gap={5}
            w="100%"
            _hover={{ bgColor: "#C01550" }}
          >
            <Image width="28px" height="28px" src={pdf} alt="PDF icon" />
            <Text color="#FFFFFF" fontWeight="400" fontSize="14px">
              Corporateprofile.pdf
            </Text>
          </Button>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center" gap={6}>
          <Box display="flex" flexDirection="row" alignItems="center" gap={3}>
            <Image
              width="30.65px"
              height="30.65px"
              src={linkedin}
              alt="LinkedIn icon"
            />
            <Image
              width="25px"
              height="25.42px"
              src={twitter}
              alt="Twitter icon"
            />
            <Image width="30px" height="28.42px" src={fb} alt="Facebook icon" />
            <Image
              width="30px"
              height="28.42px"
              src={insta}
              alt="Instagram icon"
            />
          </Box>

          <Button
            bgColor="#1A1A1A"
            border="1.5px solid #E5195E"
            color="#E5195E"
            fontWeight="400"
            fontSize="14px"
            width="237px"
            height="38px"
            borderRadius="1px"
            _hover={{ bgColor: "#E5195E", color: "#FFFFFF" }}
          >
            Contact Us
          </Button>

          <Image src={star} w="216px" h="48px" />

          <Box display="flex" gap={2} flexDirection="column">
            <Heading color="#FFFFFF" fontWeight="400" fontSize="18px">
              Subscribe to our Newsletter
            </Heading>
            <Input
              type="email"
              placeholder="Enter Email"
              w="100%"
              borderRadius={"1px"}
              color="#E6E6E6"
            />
            <Button
              bgColor="#E5195E"
              _hover={{ bgColor: "#E5195E" }}
              borderRadius="1px"
              color="#fff"
            >
              Subcribe
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default FooterCom;
