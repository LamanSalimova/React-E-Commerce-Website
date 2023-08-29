import React, { useState } from "react";
import Banner from "../components/home/Banner";
import Brends from "../components/home/Brends";
import { Box, Container, Flex } from "@chakra-ui/react";
import Category from "../components/home/Category";
import Sorting from "../components/home/Sorting";
import Products from "../components/home/Products";
import Subscribe from "../components/Subscribe";
import Services from "../components/Services";
import Social from "../components/Social";
import Cta from "../components/Cta";

export default function Home() {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  return (
    <>
      <Banner />
      <Container maxW="1140px">
        <Flex
          justify="end"
          align="start"
          bg="var(--lightBgColor)"
          my="20px"
          py="30px"
        >
          <Box w={{ base: "full", md: "20%", xl: "20%" }}>
            <Sorting setSort={setSort} />
          </Box>
        </Flex>
        <Box py="20px" my="20px">
          <Flex
            justify="space-between"
            gap="20px"
            flexDirection={{ base: "column", md: "row", xl: "row" }}
          >
            <Box
              w={{ base: "full", md: "30%", xl: "30%" }}
              minH="300px"
              bg="var(--lightBgColor)"
            >
              <Category setCategory={setCategory} />
            </Box>
            <Flex w="full" align="center" justify="center">
              <Products category={category} sort={sort} />
            </Flex>
          </Flex>
        </Box>
      </Container>
      {/* <Brends /> */}
      <Cta />
      <Services />
      <Social />
      <Subscribe />
    </>
  );
}
