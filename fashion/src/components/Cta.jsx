import { Box, Container, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import img from "../assets/images/icons/cta.png";
import appStore from "../assets/images/icons/appStore.png";
import googlePlay from "../assets/images/icons/googlePlay.png";
import { Link } from "react-router-dom";
export default function Cta() {
  return (
    <Box
      bg="var(--darkBgColor)"
      py="40px"
      pb={{ base: "80px", md: "40px", xl: "40px" }}
    >
      <Container maxW="1140px">
        <Flex
          justify="space-between"
          align={{ base: "center", md: "start", xl: "start" }}
          gap="80px"
          flexDirection={{ base: "column", md: "row", xl: "row" }}
        >
          <Flex justify="center" align="center" maxW="490px" h="330px">
            <Image src={img} w="full" h="full" />
          </Flex>
          <Stack
            gap="60px"
            justify="center"
            align={{ base: "center", md: "start", xl: "start" }}
          >
            <Text
              fontSize="32px"
              lineHeight="42px"
              fontWeight="700"
              color="var(--light)"
              textAlign={{ base: "center", md: "start", xl: "start" }}
            >
              Enjoy mobile shopping with our Createx Store App!
            </Text>
            <Flex gap="22px">
              <Link>
                <Image src={appStore} />
              </Link>
              <Link>
                <Image src={googlePlay} />
              </Link>
            </Flex>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
