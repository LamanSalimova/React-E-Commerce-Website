import React from "react";
import Header from "../components/Header";
import Banner from "../components/home/Banner";
import Brends from "../components/home/Brends";
import { Box, Container, Flex } from "@chakra-ui/react";
import Category from "../components/home/Category";
import Sorting from "../components/home/Sorting";

export default function Home() {
  return (
    <>
      <Banner />
      {/* <Brends /> */}
      <Container maxW="1140px">
        <Flex
          justify="end"
          align="start"
          bg="var(--mainColorLight)"
          my="20px"
          py="30px"
        >
          <Box w="20%">
            <Sorting />
          </Box>
        </Flex>
        <Box py="20px" my="20px">
          <Flex justify="space-between">
            <Box w="30%" bg="var(--mainColorLight)">
              <Category />
            </Box>
            <Flex w="full">Products</Flex>
          </Flex>
        </Box>
      </Container>
    </>
  );
}
