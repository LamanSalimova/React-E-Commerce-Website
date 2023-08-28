import React from "react";
import icon1 from "../assets/images/icons/delivery.png";
import icon2 from "../assets/images/icons/call.png";
import icon3 from "../assets/images/icons/shield.png";
import icon4 from "../assets/images/icons/creditCard.png";
import { Container, Flex, Stack, Text, Image } from "@chakra-ui/react";
export default function Services() {
  const servicesData = [
    {
      id: 1,
      imgUrl: icon1,
      title: "Fast Worldwide Shipping",
      text: "Get free shipping over $250",
    },
    {
      id: 2,
      imgUrl: icon2,
      title: "Fast Worldwide Shipping",
      text: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      imgUrl: icon3,
      title: "Money Back Guarantee",
      text: "We return money within 30 days",
    },
    {
      id: 4,
      imgUrl: icon4,
      title: "Secure Online Payment",
      text: "Accept all major credit cards",
    },
  ];
  return (
    <Container maxW="1140px">
      <Flex
        justify={{ base: "center", md: "center", lg: "space-between" }}
        py="40px"
        wrap="wrap"
        gap={{ base: "20px", md: "30px", lg: "0" }}
      >
        {servicesData.map((item, id) => (
          <Stack
            key={id}
            gap="20px"
            py="70px"
            px="20px"
            boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px"
            _hover={{
              transform: "translateY(-10px)",
              transition: "0.6s",
              cursor: "pointer",
            }}
          >
            <Flex justify="center" align="center">
              <Image src={item.imgUrl} />
            </Flex>
            <Text
              fontSize="20px"
              lineHeight="30px"
              fontWeight="700"
              color="var(--darkBgColor)"
            >
              {item.title}
            </Text>
            <Text color="var(--lightTextColor3)">{item.text}</Text>
          </Stack>
        ))}
      </Flex>
    </Container>
  );
}
