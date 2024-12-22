import { Box, Container, Heading, Text, Image, VStack, HStack } from '@chakra-ui/react';
import event from "../../assets/Images/new_Images/coolevent.jpg"
function Timeline() {
  return (
    <Box
      bgImage={event}
      bgSize="cover"
      bgRepeat="no-repeat"
      py={10}
      className="backgoundcolor-iconbox"
    >
      <Container maxW="container.xl">
        <VStack spacing={8} textAlign="center" color="white">
          <Text fontSize="lg" color="navy" className="heading-sub layout-3">
            roadmap
          </Text>
          <Heading size="lg">How it all Started</Heading>
        </VStack>

        <VStack spacing={6} mt={10} className="block-timeline layout-03">
          {/* Timeline Item 1 */}
          <Box
            className="item is-active"
            bg="white"
            borderRadius="md"
            p={5}
            boxShadow="md"
          >
            <HStack spacing={4}>
              <Box>
                <Text fontSize="sm" fontWeight="bold">
                  November
                </Text>
                <Text fontSize="lg" fontWeight="bold">
                  2011
                </Text>
              </Box>
              <HStack spacing={3}>
                <Image
                  src={event}
                  alt="Joy in Health and Happiness book published"
                  width="80px"
                />
                <Text>Joy in Health and Happiness</Text>
              </HStack>
            </HStack>
          </Box>

          {/* Timeline Item 2 */}
          <Box className="item" bg="white" borderRadius="md" p={5} boxShadow="md">
            <HStack spacing={4}>
              <Box>
                <Text fontSize="sm" fontWeight="bold">
                  July
                </Text>
                <Text fontSize="lg" fontWeight="bold">
                  2018
                </Text>
              </Box>
              <HStack spacing={3}>
                <Image
                  src={event}
                  alt="Topical Podcasts launched"
                  width="150px"
                />
                <Text>Topical launched </Text>
              </HStack>
            </HStack>
          </Box>

          {/* Timeline Item 3 */}
          <Box className="item" bg="white" borderRadius="md" p={5} boxShadow="md">
            <HStack spacing={4}>
              <Box>
                <Text fontSize="sm" fontWeight="bold">
                  November
                </Text>
                <Text fontSize="lg" fontWeight="bold">
                  2020
                </Text>
              </Box>
              <HStack spacing={3}>
                <Image
                  src={event}
                  alt="App launched"
                  width="80px"
                />
                <Text>evnets</Text>
              </HStack>
            </HStack>
          </Box>

          {/* Timeline Item 4 */}
          <Box className="item" bg="white" borderRadius="md" p={5} boxShadow="md">
            <HStack spacing={4}>
              <Box>
                <Text fontSize="sm" fontWeight="bold">
                  November
                </Text>
                <Text fontSize="lg" fontWeight="bold">
                  2022
                </Text>
              </Box>
              <HStack spacing={3}>
                <Image
                  src={event}
                  alt="JoyScore Book Published"
                  width="100px"
                />
                <Text>Published</Text>
              </HStack>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default Timeline;
