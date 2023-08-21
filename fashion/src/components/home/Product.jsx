import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Product({ product }) {
  return (
    <Box w="full" px="20px" pb="40px" border="1px solid var(--mainColorLight)">
      <Image src={product?.image} w="200px" h="200px" />

      <Box py="20px" mt="10px">
        <Text fontSize="18px" fontWeight="500" minH="100px">
          {product.title}
        </Text>
        <Flex
          justify="space-between"
          mt="30px"
          align="center"
          fontSize="24px"
          fontWeight="700"
        >
          <Text>${product.price}</Text>
          <Flex
            p="10px"
            borderRadius="5px"
            bg="var(--mainColor)"
            align="center"
            justify="center"
            _hover={{
              cursor: "pointer",
            }}
          >
            <AiOutlineShoppingCart size={24} />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
