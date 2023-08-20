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
        <Box bg="var(--mainColor)" py="20px">
          <Flex justify="space-between">
            <Box flex="1">
              <Category />
            </Box>
            <Flex flex="1" textAlign="end">
              <Sorting />
            </Flex>
          </Flex>
        </Box>
      </Container>
      <Banner />
    </>
  );
}
