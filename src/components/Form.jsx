import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Image,
  Input,
  Select,
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
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Spinner } from "@chakra-ui/react";
import { TbNumber2Small } from "react-icons/tb";


const Form = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [fileAdded, setFileAdded] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [formError, setformError] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (!captchaToken) {
      console.log("Please complete the CAPTCHA");
      return;
    }

    const handleCaptcha = (value) => {
      setCaptchaValue(value);
    };

    const formData = { ...data, captchaToken };
    console.log(formData);
    setLoading(true);
    setformError(null);

    try {
      const response = await axios.post(
        "https://contact.wdipl.com/api/v1/mails/client-enquiry-for-idea",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      if (response.status === 200) {
        console.log(response);
        setSuccess("Your message has been sent successfully");
        setformError(null);
        reset();
        setSliderValue(0);
      } else {
        setformError("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      setformError("There was an error submitting the form.");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  const onCaptchaChange = (value) => {
    setCaptchaToken(value);
    console.log("Captcha value:", value);
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
    <Container id="contact-section" maxW="container.2xl" p={{ base: "1rem", lg: "3rem" }} bg="black">
      <Box
        bg="#0F0F0F"
        display="flex"
        flexDirection="column"
        alignItems="center"
        // w="100%"
      >
        <Heading
          fontWeight="600"
          lineHeight="57.4px"
          fontSize={{ base: "30px", md: "40px" }}
          textAlign="center"
          color="#FBFBFB"
          w={{ base: "100%", md: "75%", lg: "50%" }}
          py={"1rem"}
        >
          Let’s Collaborate to Shape Your Vision into Reality
        </Heading>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={"2rem"}
          w={"100%"}
        >
          {/* <form> */}
          <FormControl
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={4}
            w="100%"
          >
            <Box
              px={"4rem"}
              display="grid"
              gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={4}
              justifyItems="center"
              w="100%"
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
                  type: "number",
                  name: "contactnumber",
                },
              ].map((field, index) => (
                <Box w="100%" key={index}>
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
                  name: "aboutus",
                },
              ].map((selectField, index) => (
                <Box w="100%" key={index + 3}>
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

            <Box w="100%" px={"4rem"}>
              <FormLabel color="#FFFFFF">
                Tell us about your project and business challenge.
              </FormLabel>
              <Textarea
                {...register("project_challenges", {
                  required: "Project details are required",
                })}
                border="1px solid #E5195E"
                w="100%"
                focusBorderColor="#E5195E"
                backgroundColor="#E5195E0A"
                color="white"
                minH="65px"
              />
              {errors.project_challenges && (
                <Text color="red.400" mt={2}>
                  {errors.project_challenges.message}
                </Text>
              )}
            </Box>

            <Box
              display="grid"
              gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={5}
              justifyItems="center"
              w="100%"
              px={"4rem"}
            >
              <Box w="100%">
                <FormLabel color="#FFFFFF">
                  When would you like to start
                </FormLabel>
                <Select
                  {...register("would_like_start", {
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
                {errors.would_like_start && (
                  <Text color="red.400" mt={2}>
                    {errors.would_like_start.message}
                  </Text>
                )}
              </Box>

              <Box w="100%">
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
                <SliderTrack bg="#999999" height="2px">
                  <SliderFilledTrack bg="#E5195E" />
                </SliderTrack>
                <SliderThumb boxSize={4} bg="#E5195E"></SliderThumb>
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
                        marginTop="-2.8rem"
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
              alignItems="center"
              gap={4}
              py={4}
            >
              {/* <FormLabel color="#FFFFFF">
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
              )} */}
              <Box>
                <ReCAPTCHA
                  sitekey='6Ldhwk4qAAAAAB-Xbyvp8BtmnyrBqBbpnC1skOb6'
                  onChange={onCaptchaChange}
                />
              </Box>
            </Box>

            <Box w="100%" display="flex" justifyContent="center">
              <Button
                bg="#E5195E"
                w="100%"
                maxW="912px"
                h="55px"
                color="white"
                borderRadius="0px"
                type="submit"
                onClick={handleSubmit(onSubmit)}
                isLoading={loading}
                _hover={{ bg: "#D41554" }}
                disabled={loading} // Disable button when loading
              >
                {loading ? (
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                ) : (
                  "Submit"
                )}
              </Button>
            </Box>
          </FormControl>
          {/* </form> */}
        </Box>
      </Box>
    </Container>
  );
};

export default Form;
