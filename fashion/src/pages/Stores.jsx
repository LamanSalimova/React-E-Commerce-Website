import React from "react";
import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import { GrHomeRounded } from "react-icons/gr";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import img1 from "../assets/images/stores/store1.png";
import img2 from "../assets/images/stores/store2.png";
import img3 from "../assets/images/stores/store3.png";
import img4 from "../assets/images/stores/store4.png";
import StoreCard from "../components/StoreCard";
import Subscribe from "../components/Subscribe";
export default function Stores() {
  const storesData = [
    {
      id: 1,
      imgUrl: img1,
      title: "New York, USA",
      phone: "(405) 555-0128",
      email: "hello@createx.com",
      hours: "Daily from 9 am to 9 pm",
      address: "20 W 29th Street New York, NY 10001",
    },
    {
      id: 2,
      imgUrl: img2,
      title: "Delaware, USA",
      phone: "(808) 555-0111",
      email: "delaware@createx.com",
      hours: "Daily from 10 am to 9 pm",
      address: "6391 Elgin St. Celina, Delaware 10299",
    },
    {
      id: 3,
      imgUrl: img3,
      title: "New Jersey, USA",
      phone: "(702) 555-0122",
      email: "newjersey@createx.com",
      hours: "Daily from 9 am to 8 pm",
      address: "2464 Royal Ln. Mesa, New Jersey 45463",
    },
    {
      id: 4,
      imgUrl: img4,
      title: "Maine, USA",
      phone: "(219) 555-0114",
      email: "maine@createx.com",
      hours: "Daily from 9 am to 9 pm",
      address: "8502 Preston Rd. Inglewood, Maine 98380",
    },
  ];
  return (
    <>
      <Box bg="var(--lightBgColor)" py="10px">
        <Container maxW="1140px">
          <Flex gap="10px" color="var(--darkTextColor2)" align="center">
            <Link to={ROUTES.HOME}>
              <GrHomeRounded />
            </Link>
            <BsChevronRight />
            <Text color="var(--lightTextColor5)">Our Stores</Text>
          </Flex>
        </Container>
      </Box>
      <Container maxW="1140px">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr",
            lg: "1fr 3fr",
          }}
          py="40px"
          mb="80px"
          gap={{ base: "20px", md: "30px", lg: "0" }}
        >
          <Text
            as="h3"
            color="var(--primary)"
            fontSize="28px"
            fontWeight="700"
            lineHeight="42px"
          >
            Our Stores
          </Text>
          <Grid
            templateRows={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            columnGap="30px"
            rowGap="50px"
          >
            {storesData.map((storeItem, i) => (
              <StoreCard key={i} storeItem={storeItem} />
            ))}
          </Grid>
        </Grid>
      </Container>
      <Subscribe />
    </>
  );
}
