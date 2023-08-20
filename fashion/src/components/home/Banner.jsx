import React from "react";
import {
  Container,
  Box,
  Flex,
  Image,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import bannerImg from "../../assets/images/hero/hero.png";
// import bannerImg2 from "../assets/images/hero/hero2.png";

export default function Banner() {
  return (
    <Container maxW="1140px">
      <Box
        width="full"
        bgColor="var(--mainColorLight)"
        height={{ base: "100vh", md: "100vh", lg: "75vh" }}
        mt="20px"
        px="40px"
        pt="40px"
        // backgroundImage="url(https://media.istockphoto.com/id/1398610798/photo/young-woman-in-linen-shirt-shorts-and-high-heels-pointing-to-the-side-and-talking.jpg?b=1&s=612x612&w=0&k=20&c=KLZlMwDjVKXBgED2hfek9f-vPSWYT5PbYt96P-gbJ8I=)"
        // backgroundSize="cover"
        // backgroundRepeat="no-repeat"
      >
        <Flex
          justify="space-between"
          direction={{ base: "column", md: "row", lg: "row" }}
          gap={{ base: "40px", md: "0", lg: "0" }}
        >
          <Box width="100%">
            <Stack display="inline">
              <Text
                as="span"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="800"
                bg="var(--light)"
                pr="80px"
              >
                LET’S
              </Text>
              <Text
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="800"
              >
                EXPLORE
              </Text>
              <Text
                display="inline"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="800"
                bg="var(--mainColor)"
                pr="20px"
              >
                UNIQUE
              </Text>
              <Text
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="800"
              >
                CLOTHES.
              </Text>
            </Stack>
            <Text my="20px" fontSize="20px" fontWeight="600">
              Live for influential and innovative fashion!
            </Text>
            <Button bg="var(--dark)" color="var(--light)">
              Shop now
            </Button>
          </Box>
          <Box maxW="100%" bg="red">
            <Image src={bannerImg} width="100%" height="100%" m="0" />
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
