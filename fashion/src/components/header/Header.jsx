import React, { useEffect, useState } from "react";
import { Container, Flex, Box, Image } from "@chakra-ui/react";
import logo from "../../assets/images/logo/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import SpecialOffer from "../SpecialOffer";
import Topbar from "./Topbar";
import { ROUTES } from "../../utils/routes";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, itemCount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);

  // ============Sticky Header=================
  const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY >= 100) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const stickyHeader = `${isSticky ? "sticky" : ""}`;

  return (
    <>
      <Topbar />
      <Container maxW="1140px">
        <Flex
          justify="space-between"
          align="center"
          py="20px"
          position="sticky"
          top="0"
          left="0"
        >
          <Link to={ROUTES.HOME}>
            <Image src={logo} alt="logo" w="full" h="full" />
          </Link>
          <Flex align="center" gap="20px">
            <nav>
              <ul>
                <Flex gap="30px">
                  <li>
                    <Link to={ROUTES.BLOG}>Blog</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.FAG}>FAQ</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.STORES}>Stores</Link>
                  </li>
                  <li>
                    <Link to={ROUTES.CONTACT}>Contacts</Link>
                  </li>
                </Flex>
              </ul>
            </nav>
            <Box
              position="relative"
              onClick={() => navigate("cart")}
              _hover={{ cursor: "pointer" }}
            >
              <AiOutlineShoppingCart size={30} />
              <Flex
                position="absolute"
                top="-5px"
                right="-10px"
                width="20px"
                height="20px"
                borderRadius="50%"
                backgroundColor="var(--primary)"
                color="#fff"
                justifyContent="center"
                alignItems="center"
              >
                {itemCount}
                {/* {carts?.length} */}
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Container>
      <SpecialOffer />
    </>
  );
}
