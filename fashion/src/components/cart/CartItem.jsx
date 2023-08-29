import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

export default function CartItem({ cart }) {
  const dispatch = useDispatch();
  return (
    <Flex
      borderBottom="1px solid gray"
      flexDirection={{ base: "column", md: "row", xl: "row" }}
      align={{ base: "center", md: "" }}
      gap={{ base: "20px", md: "0" }}
      pb={{ base: "20px", md: "8px" }}
    >
      <Box minW="120px">
        <Image src={cart?.image} alt="product" w="100px" h="100px" />
      </Box>
      <Text
        fontSize="12px"
        fontWeight="500"
        minW="310px"
        textAlign={{ base: "center", md: "start" }}
      >
        {cart?.title}
      </Text>
      <Text mx="14px" minW="70px">
        ${cart?.price}
        <Text as="span" mx={1}>
          ({cart?.quantity})
        </Text>
      </Text>
      <Flex
        align="center"
        justify="center"
        w="90px"
        h="40px"
        px="20px"
        py="10px"
        border="1px solid #e53e3e"
        borderRadius="4px"
        _hover={{
          bg: "red.500",
          color: "var(--light)",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onClick={() => dispatch(removeFromCart(cart?.id))}
      >
        Delete
      </Flex>
    </Flex>
  );
}
