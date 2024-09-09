import { Box, Container, Image, Text } from "@chakra-ui/react";
import banner from "../../../assets/handvector.png";
import text from "../../../assets/text.png";
import Button from "../../../components/ui/Button";

const Banner = () => {
  return (
    <Container
      backgroundImage={`url(${banner})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      maxW="700px"
      h={["auto", "100%"]}
      p={[4, 12]} 
    >
      <Box 
        w={["100%", "50%"]} 
        display="flex" 
        flexDirection="column" 
        gap={4}
      >
        <Image 
          src={text} 
          h={["60px", "104px"]}  
          w={["100", "598px"]}  
        />
        <Text
          fontSize={["16px", "20px"]}  
          fontWeight={400}
          lineHeight={["20px", "24px"]} 
          color="#FFFFFF"
        >
          Choose WDIPL for your next project and experience excellence in web development. With a proven track record of delivering innovative solutions, WDIPL combines cutting-edge technology, skilled professionals, and a client-centric approach to bring your vision to life.
        </Text>
        <Text
          fontSize={["16px", "20px"]}
          fontWeight={400}
          lineHeight={["20px", "24px"]} 
          color="#FFFFFF"
        >
          From custom web applications to e-commerce platforms, WDIPL is committed to delivering high-quality solutions.
        </Text>
        <Button Context="Let's Connect" />
      </Box>
    </Container>
  );
};

export default Banner;
