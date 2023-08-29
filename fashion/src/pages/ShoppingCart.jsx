import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import { Box, Container, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import CartItem from "../components/cart/CartItem";
import EmptyCart from "../components/EmptyCart";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, totalAmmount, itemCount } = useSelector(
    (state) => state.carts
  );

  console.log(totalAmmount, "totalAmmount");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);

  return (
    <Container maxW="1140px">
      {carts?.length ? (
        <Text fontSize="36px" fontWeight="500">
          Checkout
        </Text>
      ) : (
        <Text fontSize="36px" fontWeight="500">
          Your cart is empty
        </Text>
      )}

      {carts?.length ? (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          my="20px"
          gap="80px"
        >
          <Stack gap="30px">
            {carts?.map((cart, i) => (
              <CartItem key={i} cart={cart} />
            ))}
          </Stack>

          <Stack gap="30px">
            <Text fontSize="18px" fontWeight="500" mb={2}>
              Apply a promo code
            </Text>
            <form>
              <Flex>
                <input
                  type="text"
                  className="applyInput"
                  placeholder="Enter promo code"
                />
                <Flex
                  justify="center"
                  align="center"
                  bg="var(--primary)"
                  color="var(--light)"
                  px="40px"
                  borderRadius="4px"
                  _hover={{ cursor: "pointer" }}
                >
                  Apply
                </Flex>
              </Flex>
            </form>

            <Stack
              bg="var(--lightBgColor)"
              py="20px"
              px="30px"
              borderRadius={1}
            >
              <Text
                fontSize="20px"
                fontWeight="600"
                borderBottom="1px solid var(--lightBorderColor)"
              >
                Order totals
              </Text>
              <Flex justify="space-between">
                <Text fontWeight="500" color="var(--darkTextColor2)">
                  Subtotal
                </Text>
                <Text as="span" color="var(--darkTextColor2)">
                  {totalAmmount}
                </Text>
              </Flex>
              <Flex
                justify="space-between"
                borderBottom="1px solid var(--lightBorderColor)"
                pb="20px"
              >
                <Text fontWeight="500" color="var(--darkTextColor2)">
                  Discount
                </Text>
                <Text as="span" color="var(--darkTextColor2)">
                  -
                </Text>
              </Flex>

              <Flex
                justify="space-between"
                borderBottom="1px solid var(--lightBorderColor)"
                pb="20px"
              >
                <Text
                  fontWeight="700"
                  fontSize="20px"
                  color="var(--darkTextColor3)"
                >
                  Order Total:
                </Text>
                <Text as="span" color="var(--darkTextColor2)">
                  ${totalAmmount}
                </Text>
              </Flex>
            </Stack>
            <Flex
              w="full"
              bg="var(--primary)"
              color="var(--light)"
              align="center"
              justify="center"
              py="10px"
              _hover={{ cursor: "pointer" }}
            >
              Complete order
            </Flex>
          </Stack>
        </Grid>
      ) : (
        <Box>
          <EmptyCart />
        </Box>
      )}
    </Container>
  );
}
