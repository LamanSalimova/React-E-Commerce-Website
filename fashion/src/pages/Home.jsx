import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/home/Banner";
import Brends from "../components/home/Brends";
import { Box, Container, Flex } from "@chakra-ui/react";
import Category from "../components/home/Category";
import Sorting from "../components/home/Sorting";
import Products from "../components/home/Products";
import Subscribe from "../components/Subscribe";

export default function Home() {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
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
            <Sorting setSort={setSort} />
          </Box>
        </Flex>
        <Box py="20px" my="20px">
          <Flex justify="space-between" gap="20px">
            <Box w="30%" bg="var(--mainColorLight)">
              <Category setCategory={setCategory} />
            </Box>
            <Flex w="full" align="center" justify="center">
              <Products category={category} sort={sort} />
            </Flex>
          </Flex>
        </Box>
      </Container>
      <Subscribe />
    </>
  );
}
