// src/styles/commonStyles.js
export const commonStyles = {
    transition: "all 0.5s",
    position: "relative",
    display: "inline-flex",
    _hover: {
      _before: { width: "7px" },
      _after: { width: "100%" },
    },
    _before: {
      content: "''",
      position: "absolute",
      top: "7px",
      right: "-7px",
      width: 0,
      height: "100%",
      transition: "all 0.5s",
    },
    _after: {
      content: "''",
      position: "absolute",
      bottom: "0px",
      left: "1px",
      borderBottom: "3px solid #e5195e",
      borderRadius: "9px",
      width: "100%",
      transition: "all 0.5s",
      transform: "scaleX(0)",
      transformOrigin: "left",
      height: "12px",
    },
    _hover: {
      _before: { width: "7px" },
      _after: {
        transform: "scaleX(1)",
        transformOrigin: "left",
      },
    },
  };
  