import {
    Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const BentoGrid = ({ img, title, festivalName, description }) => {
  return (
    <Grid templateColumns="repeat(1, 1fr)" gap="6">
      <Card width="100%">
        <CardBody>
          <Heading color="blue.600" fontSize="2xl" mb={4} size="md">{title}</Heading>
          <Box height="300px" width="400px">
          <Image src={img} alt={img} borderRadius="lg" />
          </Box>
          <Stack mt="2">
            <Text fontSize="xl">
              {festivalName}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Text>{description}</Text>
        </CardFooter>
      </Card>
    </Grid>
  );
};
export default BentoGrid;
