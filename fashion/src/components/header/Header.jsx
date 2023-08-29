import React, { useEffect, useState } from "react";
import { Container, Flex, Box, Image, background } from "@chakra-ui/react";
import logo from "../../assets/images/logo/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import SpecialOffer from "../SpecialOffer";
import Topbar from "./Topbar";
import { ROUTES } from "../../utils/routes";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, itemCount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <Box position="sticky" top="0" zIndex="100">
        <Topbar />
        <Box w="full" bg="var(--light)">
          <Container maxW="1140px">
            <Flex
              justify="space-between"
              align="center"
              py={{ base: "16px", md: "0", xl: "0" }}
            >
              <Link to={ROUTES.HOME}>
                <Image src={logo} alt="logo" w="full" h="full" />
              </Link>
              <Box
                position="relative"
                ml={{ base: "0", md: "0", xl: "22px" }}
                mr={{ base: "30px", md: "0", xl: "0" }}
                display={{ base: "block", md: "none", xl: "none" }}
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
              <Box
                className="hamburger"
                onClick={handleClick}
                _hover={{
                  cursor: "pointer",
                }}
                zIndex="55"
                position="absolute"
                right="10px"
                top="60px"
              >
                {click ? (
                  <FaTimes color="var(--light)" size={24} />
                ) : (
                  <FaBars color="var(--primary)" size={24} />
                )}
              </Box>

              <Flex
                alignItems="center"
                justify="space-between"
                gap="20px"
                className={click ? "nav-menu active" : "nav-menu"}
              >
                <Flex className="flex-out-nav" align="center">
                  <nav
                    style={{
                      paddingTop: "30px",
                    }}
                  >
                    <ul>
                      <Flex
                        className="flex-in-ul"
                        align="center"
                        gap={{ base: "60px", md: "0", xl: "30px" }}
                      >
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
                    ml={{ base: "0", md: "0", xl: "22px" }}
                    display={{ base: "none", md: "block", xl: "block" }}
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
            </Flex>
          </Container>
        </Box>
      </Box>
      <SpecialOffer />
    </>
  );
}
