import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Image,
  Input,
  Select,
  SelectField,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FiPaperclip } from "react-icons/fi";
import captcha from "../assets/captcha.png";

const Form = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [fileAdded , setFileAdded] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };
  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const maxSize = 5 * 1024 * 1024;
      const validTypes = ["image/png", "image/jpeg", "application/pdf"];

      if (!validTypes.includes(file.type)) {
        setValue("fileInput", null);
        trigger("fileInput");
        return;
      }

      if (file.size > maxSize) {
        setValue("fileInput", null);
        trigger("fileInput");
        return;
      }

      setValue("fileInput", file);
      trigger("fileInput");
    }
  };

  return (
    <Box bg="black" p="4rem" w="100vw">
      <Box
        bg="#0F0F0F"
        display="flex"
        flexDirection="column"
        alignItems="center"
        w="100%"
        px="4rem"
        py="2rem"
      >
        <Heading
          fontWeight="600"
          lineHeight="57.4px"
          fontSize="40px"
          textAlign="center"
          color="#FBFBFB"
          w="50%"
          py={"1rem"}
        >
          Let's Collaborate to Shape Your Vision into Reality
        </Heading>
        <Box w="100%" display="flex" flexDirection="column" alignItems="center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl display="flex" flexDirection="column" gap={4}>
              <Box
                display="grid"
                gridTemplateColumns="repeat(2, 1fr)"
                gap={2}
                justifyItems="center"
              >
                {[
                  { label: "Enter your name", type: "text", name: "name" },
                  {
                    label: "Enter your email address",
                    type: "email",
                    name: "email",
                  },
                  {
                    label: "Enter your contact number",
                    type: "text",
                    name: "contact",
                  },
                ].map((field, index) => (
                  <Box w="100%" maxW="570px" key={index}>
                    <FormLabel color="#FFFFFF">{field.label}</FormLabel>
                    <Input
                      {...register(field.name, {
                        required: `${field.label} is required`,
                        pattern:
                          field.type === "email"
                            ? /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
                            : undefined,
                      })}
                      border="1px solid #E5195E"
                      w="100%"
                      focusBorderColor="#E5195E"
                      type={field.type}
                      backgroundColor="#E5195E0A"
                      color="white"
                    />
                    {errors[field.name] && (
                      <Text color="red.400" mt={2}>
                        {errors[field.name].message}
                      </Text>
                    )}
                  </Box>
                ))}
                {[
                  {
                    label: "Select your country",
                    options: ["Country 1", "Country 2", "Country 3"],
                    name: "country",
                  },
                  {
                    label: "Select your services",
                    options: ["Service 1", "Service 2", "Service 3"],
                    name: "services",
                  },
                  {
                    label: "Where did you hear about us? *",
                    options: ["Source 1", "Source 2", "Source 3"],
                    name: "source",
                  },
                ].map((selectField, index) => (
                  <Box w="100%" maxW="570px" key={index + 3}>
                    <FormLabel color="#FFFFFF">{selectField.label}</FormLabel>
                    <Select
                      {...register(selectField.name, {
                        required: `${selectField.label} is required`,
                      })}
                      border="1px solid #E5195E"
                      w="100%"
                      color="white"
                      placeholder="Select an option"
                    >
                      {selectField.options.map((option, idx) => (
                        <option
                          key={idx}
                          value={option.toLowerCase().replace(/\s/g, "")}
                        >
                          {option}
                        </option>
                      ))}
                    </Select>
                    {errors[selectField.name] && (
                      <Text color="red.400" mt={2}>
                        {errors[selectField.name].message}
                      </Text>
                    )}
                  </Box>
                ))}
              </Box>

              <Box w="100%" maxW="1186px">
                <FormLabel color="#FFFFFF">
                  Tell us about your project and business challenge.
                </FormLabel>
                <Textarea
                  {...register("projectDetails", {
                    required: "Project details are required",
                  })}
                  border="1px solid #E5195E"
                  w="100%"
                  focusBorderColor="#E5195E"
                  backgroundColor="#E5195E0A"
                  color="white"
                  minH="65px"
                />
                {errors.projectDetails && (
                  <Text color="red.400" mt={2}>
                    {errors.projectDetails.message}
                  </Text>
                )}
              </Box>

              <Box
                display="grid"
                gridTemplateColumns="repeat(2, 1fr)"
                gap={5}
                justifyItems="center"
              >
                <Box w="100%" maxW="570px">
                  <FormLabel color="#FFFFFF">
                    When would you like to start
                  </FormLabel>
                  <Select
                    {...register("startDate", {
                      required: "Start date is required",
                    })}
                    border="1px solid #E5195E"
                    w="100%"
                    color="white"
                    placeholder="Select an option"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  {errors.startDate && (
                    <Text color="red.400" mt={2}>
                      {errors.startDate.message}
                    </Text>
                  )}
                </Box>
                {/* <Box w="100%" maxW="570px">
                  <FormLabel color="#FFFFFF">Attach file</FormLabel>
                  <Input
                    id="fileInput"
                    type="file"
                    {...register("fileInput", {
                      validate: (file) =>
                        file &&
                        ["image/png", "image/jpeg", "application/pdf"].includes(
                          file.type
                        ) &&
                        file.size <= 5 * 1024 * 1024
                          ? true
                          : "Invalid file type or size. Only PNG, JPEG, and PDF files under 5MB are allowed.",
                    })}
                    onChange={handleChange}
                    display="none"
                  />
                  <Button
                    onClick={handleClick}
                    leftIcon={<Icon as={FiPaperclip} />}
                    variant="outline"
                    bg="#E5195E12"
                    border="1px solid #E5195E"
                    borderRadius="10px"
                    size="md"
                    _hover={{ bg: "#E5195E12" }}
                    w="100%"
                    color="#fff"
                  >
                    Attach file
                  </Button>
                  {errors.fileInput && (
                    <Text color="red.400" mt={2}>
                      {errors.fileInput.message}
                    </Text>
                  )}
                </Box> */}
                <Box w="100%" maxW="570px">
                  <FormLabel color="#FFFFFF">Attach file</FormLabel>
                  <Input
                    id="fileInput"
                    type="file"
                    {...register("fileInput", {
                      validate: (file) =>
                        file &&
                        ["image/png", "image/jpeg", "application/pdf"].includes(
                          file.type
                        ) &&
                        file.size <= 5 * 1024 * 1024
                          ? true
                          : "Invalid file type or size. Only PNG, JPEG, and PDF files under 5MB are allowed.",
                    })}
                    onChange={(e) => {
                      handleChange(e);
                      setFileAdded(true); 
                    }}
                    display="none"
                  />
                  <Button
                    onClick={handleClick}
                    leftIcon={<Icon as={FiPaperclip} />}
                    variant="outline"
                    bg="#E5195E12"
                    border="1px solid #E5195E"
                    borderRadius="10px"
                    size="md"
                    _hover={{ bg: "#E5195E12" }}
                    w="100%"
                    color="#fff"
                  >
                    Attach file
                  </Button>
                  {errors.fileInput && (
                    <Text color="red.400" mt={2}>
                      {errors.fileInput.message}
                    </Text>
                  )}
                  {fileAdded && !errors.fileInput && (
                    <Text color="green.400" mt={2}>
                      File added successfully!
                    </Text>
                  )}
                </Box>
              </Box>

              <Box w="100%" px={"4rem"} color="white" borderRadius="md">
                <Text mb={4} fontWeight="400" fontSize="18px">
                  What is the budget of your project?
                </Text>
                <Slider
                  aria-label="budget-slider"
                  min={0}
                  max={500000}
                  step={100000}
                  value={sliderValue}
                  onChange={(value) => {
                    setSliderValue(value);
                    setValue("budget", value); 
                  }}
                  colorScheme="pink"
                >
                  <SliderTrack bg="gray.700" height="2px">
                    <SliderFilledTrack bg="#E5195E" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} bg="#E5195E"></SliderThumb>
                </Slider>
                {errors.budget && (
                  <Text color="red.400" mt={2}>
                    {errors.budget.message}
                  </Text>
                )}
                <Flex justify="space-between" mt={4}>
                  {[0, 100000, 200000, 300000, 400000, 500000].map(
                    (val, index) => (
                      <Box
                        key={index}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Box
                          top="11px"
                          as="button"
                          borderRadius="50%"
                          w="8.34px"
                          h="8.34px"
                          px="0"
                          marginTop="-3rem"
                          position="relative"
                          mb={"3rem"}
                          bg={sliderValue >= val ? "#E5195E" : "gray.600"}
                        ></Box>
                        <Text color="gray.400" fontSize="sm" mt={"-1.7rem"}>
                          {val / 1000}k
                        </Text>
                      </Box>
                    )
                  )}
                </Flex>
              </Box>
              <Box
                w="100%"
                maxW="1186px"
                display="flex"
                flexDirection="column"
                gap={4}
              >
                <FormLabel color="#FFFFFF">
                  Please type the letters below
                </FormLabel>
                <Textarea
                  {...register("captcha", {
                    required: "Captcha input is required",
                  })}
                  border="1px solid #E5195E"
                  w="100%"
                  focusBorderColor="#E5195E"
                  backgroundColor="#E5195E0A"
                  color="white"
                  minH="65px"
                />
                {errors.captcha && (
                  <Text color="red.400" mt={2}>
                    {errors.captcha.message}
                  </Text>
                )}
                <Box>
                  <Image src={captcha} w="147px" h="55px" borderRadius="1px" />
                </Box>
              </Box>

              <Box px="5rem">
                <Button
                  bg="#E5195E"
                  w="912px"
                  h="55px"
                  borderRadius="0px"
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
