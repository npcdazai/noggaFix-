import React from "react";
import {
  Button,
  Link,
  Box,
  Text,
  Flex,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";

const LetsTalkButton = ({ isLink = false, children }) => {
  const [isLargerThan767] = useMediaQuery("(min-width: 767px)");

  const commonStyles = {
    bg: "#e5195e",
    px: "56px",
    py: "10px",
    color: "white",
    fontFamily: "Manrope",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: "27.24px",
    fontSize: isLargerThan767 ? "16px" : "18px",
    transition: "all 0.5s",
    position: "relative",
    display: "inline-flex",
    textDecoration: "none",
    _hover: {
      _before: { width: "7px" },
      "& span.one": { height: "7px" },
      "& span.two": { height: "100%" },
      _after: { width: "100%" },
    },
    _before: {
      content: "''",
      position: "absolute",
      top: "7px",
      right: "-7px",
      borderTop: "1px solid #e5195e",
      width: 0,
      height: "100%",
      transition: "all 0.5s",
    },
    _after: {
      content: "''",
      position: "absolute",
      bottom: "-7px",
      left: "7px",
      borderTop: "1px solid #e5195e",
      width: 0,
      transition: "all 0.5s",
    },
  };

  return (
    <>
      {isLink ? (
        <Link {...commonStyles}>
          {children}
          <Box
            as="span"
            className="one"
            position="absolute"
            width="1px"
            height="0"
            bottom="-7px"
            bg="#e5195e"
            left="7px"
            transition="all 0.5s"
          ></Box>
          <Box
            as="span"
            className="two"
            position="absolute"
            width="1px"
            height="0"
            bottom="-7px"
            bg="#e5195e"
            right="-7px"
            transition="all 0.5s"
          ></Box>
        </Link>
      ) : (
        <Button {...commonStyles}>
          {children}
          <Box
            as="span"
            className="one"
            position="absolute"
            width="1px"
            height="0"
            bottom="-7px"
            bg="#e5195e"
            left="7px"
            transition="all 0.5s"
          ></Box>
          <Box
            as="span"
            className="two"
            position="absolute"
            width="1px"
            height="0"
            bottom="-7px"
            bg="#e5195e"
            right="-7px"
            transition="all 0.5s"
          ></Box>
        </Button>
      )}
    </>
  );
};

const SmallButtonWithArrow = ({ children }) => (
  <Flex
    as="span"
    align="center"
    fontFamily="Manrope"
    fontSize="16px"
    fontWeight="500"
    className="small_bta"
  >
    {children}
    <Box as="img" className="arrow_up" transition="0.5s" ml="3px" />
  </Flex>
);

const App = ({ Context, imgs }) => {
  return (
    <div>
      <LetsTalkButton isLink>{Context}</LetsTalkButton>
      <SmallButtonWithArrow>{imgs}</SmallButtonWithArrow>
    </div>
  );
};

export default App;