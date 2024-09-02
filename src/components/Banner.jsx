import { Box, Heading, Image, Text } from "@chakra-ui/react";
import banner from "../assets/handvector.png";
import text from "../assets/text.png";
import Button from "../components/ui/Button"
const Banner = () => {
  return (
    <div>
      <Box>
        <Box
          backgroundImage={`url(${banner})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          w="100%"
          h="100%"
          p={8}
        >
          <Box w="50%" display="flex" flexDirection="column" gap={4}>
            <Image src={text} h="104px" w="598px" />
            <Text
              fontSize="20px"
              fontWeight={400}
              lineHeight="24px"
              color="#FFFFFF"
            >
              Choose WDIPL for your next project and experience excellence in
              web development. With a proven track record of delivering
              innovative solutions, WDIPL combines cutting-edge technology,
              skilled professionals, and a client-centric approach to bring your
              vision to life.{" "}
            </Text>
            <Text
              fontSize="20px"
              fontWeight={400}
              lineHeight="24px"
              color="#FFFFFF"
            >
              From custom web applications to e-commerce platforms, WDIPL is
              committed to delivering high-quality
            </Text>
            <Button Context="Let's Connect"/>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Banner;
