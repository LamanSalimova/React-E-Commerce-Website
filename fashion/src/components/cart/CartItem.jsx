import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

export default function CartItem({ cart }) {
  const dispatch = useDispatch();
  return (
    <Flex borderBottom="1px solid gray" pb={2}>
      <Box minW="120px">
        <Image src={cart?.image} alt="product" w="100px" h="100px" />
      </Box>
      <Text fontSize="12px" fontWeight="500" minW="310px">
        {cart?.title}
      </Text>
      <Text mx="14px" minW="60px">
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
        border="1px solid var(--mainColor)"
        borderRadius="4px"
        _hover={{
          bg: "var(--mainColor)",
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
