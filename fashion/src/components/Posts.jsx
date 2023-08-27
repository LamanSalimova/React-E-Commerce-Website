import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { GoClock } from "react-icons/go";
import img1 from "../assets/images/blogs/blog5.jpg";
import img2 from "../assets/images/blogs/blog6.jpg";
import img3 from "../assets/images/blogs/blog7.jpg";
export default function Posts() {
  return (
    <>
      <Stack w="full">
        <Text
          as="h4"
          fontSize="24px"
          lineHeight="32px"
          fontWeight="700"
          color="var(--darkBgColor)"
        >
          Featured Posts
        </Text>
        <Flex align="center">
          <Box minW="118px">
            <Image src={img1} alt="post-image" w="100px" h="100px" />
          </Box>
          <Stack>
            <Flex gap="6px" color="var(--lightTextColor3)" align="center">
              <GoClock />
              <Text>July 5, 2020</Text>
            </Flex>
            <Text
              fontWeight="700"
              color="var(--darkBgColor)"
              _hover={{ color: "var(--primary)", transition: "0.6s" }}
            >
              14 Items From End-of-Spring Sales Are Sure to Spark Joy
            </Text>
          </Stack>
        </Flex>
      </Stack>
      <Stack>
        <Flex align="center">
          <Box minW="118px">
            <Image src={img2} alt="post-image" objectFit="contain" />
          </Box>
          <Stack>
            <Flex gap="6px" color="var(--lightTextColor3)" align="center">
              <GoClock />
              <Text>April 9, 2020</Text>
            </Flex>
            <Text
              fontWeight="700"
              color="var(--darkBgColor)"
              _hover={{ color: "var(--primary)", transition: "0.6s" }}
            >
              Best Fashion Instagrams of the Week
            </Text>
          </Stack>
        </Flex>
      </Stack>
      <Stack>
        <Flex align="center">
          <Box minW="118px">
            <Image src={img3} alt="post-image" objectFit="contain" />
          </Box>
          <Stack>
            <Flex gap="6px" color="var(--lightTextColor3)" align="center">
              <GoClock />
              <Text>March 12, 2020</Text>
            </Flex>
            <Text
              fontWeight="700"
              color="var(--darkBgColor)"
              _hover={{ color: "var(--primary)", transition: "0.6s" }}
            >
              Top 10 Looks from the Venice Film Festival
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}
