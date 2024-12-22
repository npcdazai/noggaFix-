import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
  VStack,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import templeImage from "../assets/Images/poojas.png";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const BookPooja = () => {
  const { register, handleSubmit } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://ngo-backend-8yek.onrender.com/api/poojaBookings/add",
        data
      );
      if (response.status === 201) {
        setFormData(data);
        console.log("Booking successfully added");
        onOpen();
      } else {
        console.error("Error adding booking:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box w="100%" h="100%" py={1} px={6}>
      <Box w="100%" h="100%" py={8} px={6}>
        <Image
          src={templeImage}
          alt="Temple"
          width="100%"
          height={{ base: "300px", md: "500px" }}
          objectFit="cover"
          borderRadius="20px"
          mb={6}
        />

        <Heading textAlign="center" size="lg" mb={4}>
          About the Pooja
        </Heading>

        <Text fontSize="md" textAlign="center" mb={6}>
          Learn more about the pooja you are about to book. Below are the
          details regarding the pooja timing, duration, and the required
          donation amount. Each pooja is designed to bring peace, prosperity,
          and divine blessings.
        </Text>

        <Box
          bg="white"
          boxShadow="md"
          borderRadius="lg"
          px={6}
          py={4}
          w="100%"
          mt={8}
        >
          <VStack align="stretch" spacing={4}>
            <HStack justify="space-between">
              <Text fontSize="md" fontWeight="600">
                Pooja Timing:
              </Text>
              <Text fontSize="md" color="gray.600">
                Morning
              </Text>
            </HStack>

            <HStack justify="space-between">
              <Text fontSize="md" fontWeight="600">
                Duration:
              </Text>
              <Text fontSize="md" color="gray.600">
                2 hours
              </Text>
            </HStack>

            <HStack justify="space-between">
              <Text fontSize="md" fontWeight="600">
                Donation Amount:
              </Text>
              <Text fontSize="md" color="gray.600">
                ₹1500
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Box>

      <Heading textAlign="center" size="lg" mb={4}>
        Book Your Pooja
      </Heading>

      <Box w="100%" as="form" onSubmit={handleSubmit(onSubmit)}>
        <VStack p={6} w="100%" spacing={6} alignItems="center">
          <SimpleGrid w="100%" columns={[2]} spacing={10}>
            <FormControl w="100%">
              <FormLabel>Name</FormLabel>
              <Box p={4} borderRadius="40px" bg="white" w="100%">
                <Input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", { required: true })}
                  border="none"
                  focusBorderColor="none"
                />
              </Box>
            </FormControl>

            <FormControl w="100%">
              <FormLabel>Date of Pooja</FormLabel>
              <Box p={4} borderRadius="40px" bg="white" w="100%">
                <Input
                  type="date"
                  placeholder="Select a date"
                  {...register("date", { required: true })}
                  border="none"
                  focusBorderColor="none"
                />
              </Box>
            </FormControl>

            <FormControl w="100%">
              <FormLabel>Time Slot</FormLabel>
              <Box p={4} borderRadius="40px" bg="white" w="100%">
                <Select
                  placeholder="Select a time slot"
                  {...register("timeSlot", { required: true })}
                  border="none"
                  focusBorderColor="none"
                >
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </Select>
              </Box>
            </FormControl>

            <FormControl w="100%">
              <FormLabel>Choose Pooja</FormLabel>
              <Box p={4} borderRadius="40px" bg="white" w="100%">
                <Select
                  placeholder="Select Pooja"
                  {...register("pooja", { required: true })}
                  border="none"
                  focusBorderColor="none"
                >
                  <option value="ganesh">Ganesh Pooja</option>
                  <option value="laxmi">Lakshmi Pooja</option>
                  <option value="saraswati">Saraswati Pooja</option>
                </Select>
              </Box>
            </FormControl>

            <FormControl w="100%">
              <FormLabel>Email Address</FormLabel>
              <Box p={4} borderRadius="40px" bg="white" w="100%">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                  border="none"
                  focusBorderColor="none"
                />
              </Box>
            </FormControl>

            <FormControl w="100%">
              <FormLabel>Phone Number</FormLabel>
              <Box p={4} borderRadius="40px" bg="white" w="100%">
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  {...register("phone", { required: true })}
                  border="none"
                  focusBorderColor="none"
                />
              </Box>
            </FormControl>
          </SimpleGrid>

          <Button
            type="submit"
            bgGradient="linear(to-r, #F6B253, #FF9500)"
            color="white"
            size="lg"
            padding="8"
            width={{ base: "80%", md: "20%" }}
            borderRadius="full"
            _hover={{
              bgGradient: "linear(to-r, #FF9500, #F6B253)",
            }}
          >
            Confirm Booking
          </Button>
        </VStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Booking Confirmed</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Thank you for booking! We will get back to you shortly.</Text>
            <Text mt={4}>Your booking details:</Text>
            <Text mt={2}>
              <strong>Name:</strong> {formData?.name}
            </Text>
            <Text mt={2}>
              <strong>Date:</strong> {formData?.date}
            </Text>
            <Text mt={2}>
              <strong>Time Slot:</strong> {formData?.timeSlot}
            </Text>
            <Text mt={2}>
              <strong>Pooja:</strong> {formData?.pooja}
            </Text>
            <Text mt={2}>
              <strong>Email:</strong> {formData?.email}
            </Text>
            <Text mt={2}>
              <strong>Phone:</strong> {formData?.phone}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BookPooja;
