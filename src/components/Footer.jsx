import { Box, Heading, Text } from "@chakra-ui/react";
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
    <div>
      <Box p={"4rem"} bgColor="#242424" display="flex" flexDirection="row" gap={7}>
        {data.map((val) => {
          return (
            <Box
              key={val.id}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Heading color="#E5195E" fontWeight={600} fontSize="22px">
                {val.countryName}
              </Heading>
              <Text color="#FFFFFF" fontWeight={600} fontSize="18px">
                {val.type}
              </Text>
              <Text
                color="#E6E6E6"
                fontWeight={200}
                fontSize="16px"
                lineHeight="21.86px"
              >
                {val.address}
              </Text>
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default Footer;
