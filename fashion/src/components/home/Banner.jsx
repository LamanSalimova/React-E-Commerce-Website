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
import hero from "../../assets/images/hero/hero-bg.png";

export default function Banner() {
  return (
    <Box
      width="full"
      height={{ base: "60vh", md: "80vh", lg: "80vh" }}
      px="40px"
      pt="40px"
      backgroundImage={hero}
      backgroundSize="cover"
    >
      <Container maxW="1140px" h="full">
        <Flex
          justify="space-between"
          direction={{ base: "column", md: "row", lg: "row" }}
          gap={{ base: "40px", md: "0", lg: "0" }}
          w="full"
          h="full"
        >
          <Stack h="full" justify="center">
            <Text
              fontSize="18px"
              lineHeight="27px"
              fontWeight="700"
              color="var(--darkBgColor)"
              textTransform="uppercase"
              fontFamily="Lato"
            >
              New collection
            </Text>
            <Text
              fontSize="62px"
              lineHeight="83px"
              fontWeight="900"
              color="var(--darkBgColor)"
              fontFamily="Lato"
            >
              Menswear 2023
            </Text>
            <Text my="20px" fontSize="20px" fontWeight="600">
              Live for influential and innovative fashion!
            </Text>
            <Flex gap="20px" mt="40px">
              <Flex
                justify="center"
                align="center"
                border="1px solid var(--primary)"
                borderRadius="4px"
                maxW="200px"
                color="var(--primary)"
                fontSize="18px"
                fontWeight="500"
                px="40px"
                py="10px"
                _hover={{
                  bg: "var(--primary)",
                  color: "var(--light)",
                  transition: "0.8s",
                  cursor: "pointer",
                }}
              >
                Shop now
              </Flex>
              <Flex
                justify="center"
                align="center"
                border="1px solid var(--primary)"
                borderRadius="4px"
                maxW="200px"
                fontSize="18px"
                fontWeight="500"
                bg="var(--primary)"
                color="var(--light)"
                px="40px"
                py="10px"
                _hover={{
                  border: "1px solid var(--primary)",
                  color: "var(--primary)",
                  transition: "0.8s",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                Shop sale
              </Flex>
            </Flex>
          </Stack>
          <Box maxW="100%"></Box>
        </Flex>
      </Container>
    </Box>
  );
}
