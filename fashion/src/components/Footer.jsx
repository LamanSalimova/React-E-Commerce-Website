import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoYoutube,
  BiLogoPinterestAlt,
} from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import appStore from "../assets/images/icons/appStore.png";
import googlePlay from "../assets/images/icons/googlePlay.png";
import heartIcon from "../assets/images/icons/heartIcon.png";
export default function Footer() {
  return (
    <Box bg="var(--darkBgColor)">
      <Container maxW="1140px">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          py="40px"
          gap={{ base: "20px", md: "30px", lg: "0" }}
        >
          <Stack gap="6px" color="var(--lightTextColor2)" fontWeight="500">
            <Text as="h5" color="var(--light)">
              HELP
            </Text>
            <Text>
              <Link to="#">Delivery & returns</Link>
            </Text>
            <Text>
              <Link to="#">FAQ</Link>
            </Text>
            <Text>
              <Link to="#">Track order</Link>
            </Text>
            <Text>
              <Link to="#">Contacts</Link>
            </Text>
            <Text>
              <Link to="#">Blog</Link>
            </Text>
          </Stack>
          <Stack gap="6px" color="var(--lightTextColor2)" fontWeight="500">
            <Text as="h5" color="var(--light)" fontWeight="500">
              SHOP
            </Text>
            <Text>
              <Link to="#">New arrivals</Link>
            </Text>
            <Text>
              <Link to="#">Trending now</Link>
            </Text>
            <Text>
              <Link to="#">Sales</Link>
            </Text>
            <Text>
              <Link to="#">Brands</Link>
            </Text>
          </Stack>

          <Stack cgap="6px" color="var(--lightTextColor2)" fontWeight="500">
            <Text color="var(--light)" fontWeight="500">
              GET IN TOUCH
            </Text>
            <Text>
              <Text as="span">Call:</Text>
              (405)555-0128
            </Text>
            <Text>
              <Text as="span">Email:</Text>
              hello@createx.com
            </Text>

            <Flex gap="10px" mt="10px" color="var(--light)">
              <Flex
                justify="center"
                align="center"
                as="span"
                p="6px"
                borderRadius="4px"
                bg="var(--darkBgColor2)"
              >
                <Link to="#">
                  <BiLogoFacebook />
                </Link>
              </Flex>
              <Flex
                justify="center"
                align="center"
                as="span"
                p="6px"
                borderRadius="4px"
                bg="var(--darkBgColor2)"
              >
                <Link to="#">
                  <AiOutlineInstagram />
                </Link>
              </Flex>
              <Flex
                justify="center"
                align="center"
                as="span"
                p="6px"
                borderRadius="4px"
                bg="var(--darkBgColor2)"
              >
                <Link to="#">
                  <AiOutlineTwitter />
                </Link>
              </Flex>
              <Flex
                justify="center"
                align="center"
                as="span"
                p="6px"
                borderRadius="4px"
                bg="var(--darkBgColor2)"
              >
                <Link to="#">
                  <BiLogoYoutube />
                </Link>
              </Flex>
              <Flex
                justify="center"
                align="center"
                as="span"
                p="6px"
                borderRadius="4px"
                bg="var(--darkBgColor2)"
              >
                <Link to="#">
                  <BiLogoPinterestAlt />
                </Link>
              </Flex>
            </Flex>
          </Stack>
          <Stack gap="20px" color="var(--lightTextColor2)" fontWeight="500">
            <Text color="var(--light)" fontWeight="500">
              DOWNLOAD OUR APP
            </Text>
            <Flex gap="20px">
              <Box maxW="full">
                <Image src={appStore} w="full" h="full" />
              </Box>
              <Box>
                <Image src={googlePlay} w="full" h="full" />
              </Box>
            </Flex>
          </Stack>
        </Grid>
      </Container>
      <Box w="full" borderTop="1px solid var(--darkBorderColor)" py="40px">
        <Container maxW="1140px">
          <Flex color="var(--light)" justify="center">
            <Text as="span" fontSize="14px">
              © All rights reserved. Made with
            </Text>
            <Image src={heartIcon} mx="5px" objectFit="contain" />
            <Text as="span" fontSize="14px">
              by Createx Studio
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
