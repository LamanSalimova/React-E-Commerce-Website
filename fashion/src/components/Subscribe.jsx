import { Box, Container, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import img from "../assets/images/icons/subscribe.png";
import checked from "../assets/images/icons/checked.png";
export default function Subscribe() {
  return (
    <Box bg="var(--lightBgColor)" py="40px">
      <Container maxW="1140px">
        <Flex
          justify="space-between"
          flexDirection={{ base: "column", md: "column", xl: "row" }}
          gap={{ base: "40px", md: "40px", xl: "0" }}
        >
          <Stack gap="20px">
            <Text
              as="h4"
              color="var(--darkBgColor)"
              fontSize="46px"
              fontWeight="900"
              lineHeight="60px"
            >
              Subscribe for updates
            </Text>
            <Text
              color="var(--lightTextColor3)"
              fontSize="20px"
              lineHeight="30px"
            >
              Subscribe for exclusive early sale access and new arrivals.
            </Text>

            <form>
              <Text as="label" color="var(--darkTextColor2)">
                Email
              </Text>
              <Flex my="20px">
                <input
                  type="text"
                  className="applyInput"
                  placeholder="Your working email"
                />
                <Flex
                  justify="center"
                  align="center"
                  bg="var(--mainColor2)"
                  color="var(--light)"
                  px="40px"
                  borderRadius="4px"
                  _hover={{ cursor: "pointer" }}
                >
                  Subscribe
                </Flex>
              </Flex>
              <Flex align="center" gap="10px" mt={4}>
                <Box>
                  <Image src={checked} />
                </Box>
                <Text fontSize="14px">
                  I agree to receive communications from Createx Store.
                </Text>
              </Flex>
            </form>
          </Stack>
          <Flex justify="center" align="center">
            <Image src={img} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
