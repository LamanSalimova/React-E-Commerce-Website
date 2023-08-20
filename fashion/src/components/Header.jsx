import React, { useEffect, useState } from "react";
import { Container, Flex, Box, Text, Image, Button } from "@chakra-ui/react";
import logo from "../assets/images/icons/logo.png";
import logoText from "../assets/images/icons/logoText.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function Header() {
  // ============Sticky Header=================
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const stickyHeader = `${isSticky ? "sticky" : ""}`;

  return (
    <Container maxW="1140px">
      <Flex
        justify="space-between"
        align="center"
        py="30px"
        position="sticky"
        top="0"
        left="0"
      >
        <Flex gap="10px">
          <Image src={logo} alt="logo" w="full" h="full" />
          <Image src={logoText} alt="logo" w="full" h="full" />
          {/* <Text as="h1" >FASHION</Text> */}
        </Flex>
        <Flex align="center" gap="20px">
          <nav>
            <ul>
              <Flex gap="30px">
                <li>Catalog</li>
                {/* <li>Fashion</li> */}
                <li>Favourite</li>
              </Flex>
            </ul>
          </nav>
          <Box position="relative">
            {/* <RouterLink to={ROUTES.SHOPPINGCART}> */}
            <AiOutlineShoppingCart size={30} />
            {/* </RouterLink> */}
            <Flex
              position="absolute"
              top="-5px"
              right="-10px"
              width="20px"
              height="20px"
              borderRadius="50%"
              backgroundColor="red"
              color="#fff"
              justifyContent="center"
              alignItems="center"
            >
              5
            </Flex>
          </Box>

          {/* <Button bg="var(--dark)" color="var(--light)">
            Sign up
          </Button> */}
        </Flex>
      </Flex>
    </Container>
  );
}
