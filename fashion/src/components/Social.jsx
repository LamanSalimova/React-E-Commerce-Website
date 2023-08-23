import { Container, Flex, Image, Stack, Text, Box } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import img1 from "../assets/images/social/img1.png";
import img2 from "../assets/images/social/img2.png";
import img3 from "../assets/images/social/img3.png";

export default function Social() {
  return (
    <Container maxW="1140px">
      <Flex
        justify={{ base: "center", md: "space-between", xl: "space-between" }}
        align={{ base: "center", md: "center", xl: "start" }}
        w="full"
        py="80px"
        flexDirection={{ base: "column", md: "column", xl: "row" }}
        gap={{ base: "40px", md: "60px", xl: "0" }}
      >
        <Stack align={{ base: "center", md: "center", xl: "start" }}>
          <Text color="var(--darkBgColor)" fontWeight="700" lineHeight="24px">
            FOLLOW US ON INSTAGRAM
          </Text>
          <Text
            fontSize="46px"
            lineHeight="60px"
            color="var(--darkBgColor)"
            fontWeight="900"
          >
            @createx_store
          </Text>
          <Flex
            justify="center"
            align="center"
            gap="4px"
            p="14px"
            color="var(--primary)"
            border="1px solid var(--primary)"
            borderRadius="4px"
            mt="40px"
            maxW="242px"
            fontSize="14px"
            fontWeight="500"
            _hover={{
              bg: "var(--primary)",
              color: "var(--light)",
              transition: "0.8s",
            }}
          >
            <AiOutlineInstagram size={20} />
            Follow Instagram
          </Flex>
        </Stack>
        <Flex
          gap={{ base: "30px", md: "10px", xl: "10px" }}
          wrap={{ base: "wrap", md: "no-wrap", xl: "no-wrap" }}
        >
          <Box
            w={{ base: "full", md: "220px", xl: "220px" }}
            height={{ base: "auto", md: "220px", xl: "220px" }}
          >
            <Image src={img1} w="full" h="full" />
          </Box>
          <Box
            w={{ base: "full", md: "220px", xl: "220px" }}
            height={{ base: "auto", md: "220px", xl: "220px" }}
          >
            <Image src={img2} w="full" h="full" />
          </Box>
          <Box
            w={{ base: "full", md: "220px", xl: "220px" }}
            height={{ base: "auto", md: "220px", xl: "220px" }}
          >
            <Image src={img3} w="full" h="full" />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
