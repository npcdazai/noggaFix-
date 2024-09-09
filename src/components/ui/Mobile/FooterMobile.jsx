import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

const data = [
  {
    id: 1,
    countryName: "INDIA",
    type: "Corporate Office",
    address:
      "614, 6th Floor, Palms Spring center, Link Road, Malad (West), Mumbai - 400064",
  },
  {
    id: 2,
    countryName: "USA",
    type: "Corporate Office",
    address:
      "614, 6th Floor, Palms Spring center, Link Road, Malad (West), Mumbai - 400064",
  },
  {
    id: 3,
    countryName: "UK",
    type: "Corporate Office",
    address:
      "614, 6th Floor, Palms Spring center, Link Road, Malad (West), Mumbai - 400064",
  },
  {
    id: 4,
    countryName: "Australia",
    type: "Corporate Office",
    address:
      "614, 6th Floor, Palms Spring center, Link Road, Malad (West), Mumbai - 400064",
  },
];

const Footer = () => {
  return (
    <Container
      maxW="container.2xl"
      p={"1rem"}
      bgColor="#242424"
      display="flex"
      gap={3}
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-between"
    >
      {data.map((val) => {
        return (
          <Box
            key={val.id}
            display="flex"
            flexDirection="column"
            w="150px"
            p={4}
            borderRadius="8px"
          >
            <Heading color="#E5195E" fontWeight={600} fontSize="18px" mb={2}>
              {val.countryName}
            </Heading>
            <Text color="#FFFFFF" fontWeight={600} fontSize="16px" mb={1}>
              {val.type}
            </Text>
            <Text
              color="#E6E6E6"
              fontWeight={200}
              fontSize="14px"
              lineHeight="21.86px"
            >
              {val.address}
            </Text>
          </Box>
        );
      })}
    </Container>
  );
};

export default Footer;
