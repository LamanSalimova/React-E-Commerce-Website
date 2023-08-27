import { Image, Text, Flex, Container, Grid, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import stroke from "../../assets/images/icons/stroke.png";
import star from "../../assets/images/icons/star.png";
import visaIcon from "../../assets/images/icons/visa.png";
import paypalIcon from "../../assets/images/icons/paypal.png";
import masterIcon from "../../assets/images/icons/master.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoPinterestAlt,
} from "react-icons/bi";
import { addToCart } from "../../redux/cartSlice";
export default function ProductDetails({ productDetail }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };
  console.log(quantity, "quantity");
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        price: productDetail?.price,
        image: productDetail?.image,
        quantity: quantity,
      })
    );
  };

  return (
    <Container maxW="1140px">
      <Text
        fontSize="24px"
        fontWeight="600"
        pb="16px"
        borderBottom="1px solid #d1d2d7"
        mt="20px"
      >
        {productDetail?.title}
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        my="40px"
      >
        <Flex
          w={{ base: "100%", md: "70%", xl: "50%" }}
          align="center"
          justify="center"
        >
          <Image src={productDetail?.image} w="350px" h="350px" />
        </Flex>
        <Stack gap="10px">
          <Flex justify="space-between" pb="10px">
            <Flex gap="20px" align="center">
              <Text fontWeight="600" fontSize="20px" color="#ff4242">
                ${productDetail?.price}
              </Text>
              <Text as="s" fontWeight="600" fontSize="20px" color="#c3c4c7">
                ${productDetail?.price * 2}
              </Text>
              <Flex
                w="50px"
                h="20px"
                p="14px"
                bg="#ff4242"
                borderRadius="4px"
                align="center"
                justify="center"
                color="var(--light)"
              >
                50%
              </Flex>
            </Flex>
            <Stack>
              <Flex gap="4px">
                <Image src={stroke} />
                <Image src={stroke} />
                <Image src={stroke} />
                <Image src={stroke} />
                <Image src={star} />
              </Flex>
              <Text color="#787a80" fontWeight="500">
                12 views
              </Text>
            </Stack>
          </Flex>

          <Text fontWeight="600" fontSize="18px">
            Rating: {productDetail?.rating?.rate}
          </Text>
          <Text fontWeight="600" fontSize="18px">
            Count: {productDetail?.rating?.count}
          </Text>

          <Flex>
            <Flex justify="space-between" w="full" my="20px">
              <Flex gap="10px">
                <Flex
                  w="20px"
                  h="20px"
                  border="1px solid var(--primary)"
                  borderRadius="4px"
                  p="16px"
                  fontSize="18px"
                  fontWeight="600"
                  justify="center"
                  align="center"
                  _hover={{
                    bg: "var(--primary)",
                    color: "var(--light)",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onClick={decrement}
                >
                  -
                </Flex>
                <Flex
                  w="20px"
                  h="20px"
                  border="1px solid var(--primary)"
                  borderRadius="4px"
                  p="16px"
                  fontSize="18px"
                  fontWeight="600"
                  justify="center"
                  align="center"
                >
                  {quantity}
                </Flex>
                <Flex
                  w="20px"
                  h="20px"
                  border="1px solid var(--primary)"
                  borderRadius="4px"
                  p="16px"
                  fontSize="18px"
                  fontWeight="600"
                  justify="center"
                  align="center"
                  _hover={{
                    bg: "var(--primary)",
                    color: "var(--light)",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onClick={increment}
                >
                  +
                </Flex>
              </Flex>
              <Flex
                align="center"
                justify="center"
                bg="var(--primary)"
                color="var(--light)"
                px="30px"
                py="10px"
                borderRadius="4px"
                gap="10px"
                _hover={{
                  cursor: "pointer",
                  opacity: "0.9",
                  transition: "0.3s",
                }}
                onClick={addBasket}
              >
                <AiOutlineShoppingCart size={20} />
                Add to cart
              </Flex>
            </Flex>
          </Flex>

          <Flex gap="10px">
            <Text fontSize="18px" fontWeight="500">
              Share:
            </Text>
            <Flex color="#787a80" align="center" justify="center" gap={3}>
              <Text as="span" _hover={{ cursor: "pointer" }}>
                <BiLogoFacebook size={20} />
              </Text>
              <Text as="span" _hover={{ cursor: "pointer" }}>
                <BiLogoTwitter size={20} />
              </Text>
              <Text as="span" _hover={{ cursor: "pointer" }}>
                <BiLogoPinterestAlt size={20} />
              </Text>
            </Flex>
          </Flex>

          <Flex gap="10px" mt="40px">
            <Flex
              px="20px"
              py="10px"
              bg="#f4f5f6"
              borderRadius="2px"
              justify="center"
              align="center"
              border="1px solid #D7DADD"
            >
              <Image src={visaIcon} />
            </Flex>
            <Flex
              px="20px"
              py="10px"
              bg="#f4f5f6"
              borderRadius="2px"
              justify="center"
              align="center"
              border="1px solid #D7DADD"
            >
              <Image src={masterIcon} />
            </Flex>
            <Flex
              px="20px"
              py="10px"
              bg="#f4f5f6"
              borderRadius="2px"
              justify="center"
              align="center"
              border="1px solid #D7DADD"
            >
              <Image src={paypalIcon} />
            </Flex>
          </Flex>
        </Stack>
      </Grid>
    </Container>
  );
}
