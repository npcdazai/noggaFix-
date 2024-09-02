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
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FiPaperclip } from "react-icons/fi";
import captcha from "../assets/captcha.png";
const Form = () => {
  const inputRef = useRef(null);

  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };
  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(file.name);
    }
  };
  return (
    <div>
      <Box bgColor="black" p={"4rem"} w="100vw">
        <Box
          display="flex"
          bgColor="#0F0F0F"
          flexDirection="column"
          alignItems="center"
          w="100%"
          px={"4rem"}
          py={"2rem"}
        >
          <Heading
            fontWeight={600}
            lineHeight="57.4px"
            fontSize="40px"
            textAlign="center"
            color="#FBFBFB"
            w={"50%"}
          >
            Lets Collaborate to Shape your Vision into Reality{" "}
          </Heading>
          <Box display="flex" w="100%">
            <FormControl display="flex" gap={4} flexDirection="column">
              <Box
                display="grid"
                gridTemplateColumns="repeat(2, 1fr)"
                gap={2}
                justifyItems="center"
              >
                <Box w="100%" maxW="570px">
                  <FormLabel color="#FFFFFF">Enter your name</FormLabel>
                  <Input
                    border="1px solid #E5195E"
                    w="100%"
                    focusBorderColor="#E5195E"
                    type="text"
                    backgroundColor="#E5195E0A"
                    color="white"
                  />
                </Box>
                <Box w="100%" maxW="570px">
                  <FormLabel color="#FFFFFF">
                    Enter your email address
                  </FormLabel>
                  <Input
                    border="1px solid #E5195E"
                    w="100%"
                    focusBorderColor="#E5195E0A"
                    type="text"
                    backgroundColor="#E5195E0A"
                    color="white"
                  />
                </Box>
                <Box w="100%" maxW="570px">
                  <FormLabel color="#FFFFFF">Select your country</FormLabel>
                  <Select border="1px solid #E5195E" w="100%" color="#FFFFFF">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>
                <Box w="100%" maxW="570px">
                  <FormLabel color="#FFFFFF">
                    Enter your contact number
                  </FormLabel>
                  <Input
                    border="1px solid #E5195E"
                    w="100%"
                    focusBorderColor="#E5195E"
                    type="text"
                    backgroundColor="#E5195E0A"
                    color="white"
                  />
                </Box>
                <Box w="100%" maxW="570px">
                  <FormLabel color="#FFFFFF">Select your services</FormLabel>
                  <Select border="1px solid #E5195E" w="100%" color="white">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>
                <Box w="100%" maxW="570px">
                  <FormLabel color="#FFFFFF">
                    Where did you hear about us? *
                  </FormLabel>
                  <Select border="1px solid #E5195E" w="100%" color="white">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>
              </Box>

              <Box w="100%" maxW="1186px">
                <FormLabel color="#FFFFFF">
                  Tell us about your project and business challenge.
                </FormLabel>
                <Textarea
                  border="1px solid #E5195E"
                  w="100%"
                  focusBorderColor="#E5195E"
                  backgroundColor="#E5195E0A"
                  color="white"
                  minH="65px"
                />
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
                  <Select border="1px solid #E5195E" w="100%" color="white">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>
                <Box w="100%" maxW="570px">
                  <FormLabel color="#FFFFFF">Attach file</FormLabel>
                  <Input
                    type="file"
                    ref={inputRef}
                    onChange={handleChange}
                    display="none"
                  />
                  <Button
                    onClick={handleClick}
                    leftIcon={<Icon as={FiPaperclip} />}
                    variant="outline"
                    bgColor="#E5195E12"
                    border="1px solid #E5195E"
                    borderRadius="10px"
                    size="md"
                    _hover={{ bg: "#E5195E12" }}
                    w="100%"
                    color="#fff"
                  >
                    Attach file
                  </Button>
                </Box>
              </Box>

              <Box w="100%" px={"4rem"} color="white" borderRadius="md">
                <Text mb={4} fontWeight="400" fontSize="18px">
                  What is the budget of your project?
                </Text>
                <Slider
                  aria-label="budget-slider"
                  defaultValue={0}
                  min={0}
                  max={500000}
                  step={110000}
                  value={sliderValue}
                  onChange={handleSliderChange}
                  colorScheme="pink"
                >
                  <SliderTrack bg="gray.700" height="2px">
                    <SliderFilledTrack bg="#E5195E" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} bg="#E5195E"></SliderThumb>
                </Slider>
                <Flex justify="space-between">
                  {[0, 100000, 200000, 300000, 500000].map((val, index) => (
                    <Box
                      display="flex"
                      key={index}
                      alignItems="center"
                      textAlign="center"
                    >
                      <Box
                        top="11px"
                        as="button"
                        borderRadius="50%"
                        w="8.34px"
                        h="8.34px"
                        px="0"
                        marginTop="-1.9rem"
                        position="relative"
                        mb={"3rem"}
                        bgColor={sliderValue >= val ? "#E5195E" : "gray.600"}
                      >
                        <Box
                          top="-2.8px"
                          right="7px"
                          as="button"
                          borderRadius="50%"
                          w={sliderValue >= val ? "22.94px" : null}
                          h={sliderValue >= val ? "22.94px" : null}
                          px="0"
                          marginTop="-1rem"
                          position="relative"
                          mb={"3rem"}
                          bgColor={
                            sliderValue >= val ? "#E5195E42" : "gray.600"
                          }
                        />
                      </Box>
                      <Text color="gray.400" fontSize="sm">
                        {val / 1000}k
                      </Text>
                    </Box>
                  ))}
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
                  border="1px solid #E5195E"
                  w="100%"
                  focusBorderColor="#E5195E"
                  backgroundColor="#E5195E0A"
                  color="white"
                  minH="65px"
                />
                <Box>
                  <Image
                    src={captcha}
                    w={"147px"}
                    h={"55px"}
                    borderRadius="1px"
                  />
                </Box>
              </Box>
              <Box px={"5rem"}>
                <Button bgColor="#E5195E" w="912px" h="55px" borderRadius="0px">
                  Submit
                </Button>
              </Box>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Form;