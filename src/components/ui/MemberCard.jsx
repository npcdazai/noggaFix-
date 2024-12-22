import { Box, Card, Image, Text } from "@chakra-ui/react";
import React from "react";
// import circleFrame from "../../assets/—Pngtree—rustic golden circle flourish frame_5662697.png";

const MembersCards = ({ img, name, role }) => {
  return (
    // <Card
    //   //   boxShadow="2xl"
    //   p={4}
    //   display="flex"
    //   flexDirection="column"
    //   alignItems="center"
    //   textAlign="center"
    //   w="200px"
    //   height="280px"
    //   //   bgColor="#fffaf0"
    //   //   borderRadius={"10px"}
    // >
    <Box p={8} w="100%" textAlign="center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        w="150px"
        h="150px"
        mb={4}
      >
        <Image
          src={img}
          alt={name}
          borderRadius="full"
          width="100%"
          height="100%"
          objectFit="cover"
        //   border="5px solid #800000"
        boxShadow="lg"
        />
      </Box>
      <Text fontWeight="500" fontSize="lg" color="#FF9400">
        {name}
      </Text>
      <Text fontWeight="300" fontSize="md" color="#333">
        {role}
      </Text>
    </Box>

    // </Card>
  );
};

export default MembersCards;
