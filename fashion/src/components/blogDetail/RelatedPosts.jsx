import { Box, Container, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineComment } from "react-icons/ai";
export default function RelatedPosts({ blogsData }) {
  const { id } = useParams();
  const relatedPosts = blogsData.filter((post) => post.id !== Number(id));
  return (
    <Box
      bg="var(--lightBgColor)"
      mt="40px"
      py={{ base: "20px", md: "60px", xl: "60px" }}
    >
      <Container maxW="1140px">
        <Text
          as="h2"
          color="var(--darkBgColor)"
          fontSize={{ base: "28px", md: "42px", xl: "46px" }}
          fontWeight="900"
          mb="40px"
        >
          Related posts
        </Text>
        <Flex
          gap="12px"
          flexDirection={{ base: "column", md: "column", xl: "row" }}
        >
          {relatedPosts
            .map((post) => (
              <Link to={`/blog/${post.id}`}>
                <Stack bg="var(--light)">
                  <Box h="300px">
                    <Image src={post.imgUrl} w="full" h="full" />
                  </Box>
                  <Stack px="20px" pb="30px">
                    <Text
                      color="var(--darkBgColor)"
                      fontSize="20px"
                      lineHeight="30px"
                      fontWeight="700"
                      my={{ base: "10px", md: "0", xl: "0" }}
                    >
                      {post.title}
                    </Text>
                    <Flex
                      gap="12px"
                      align="center"
                      color="var(--lightTextColor3)"
                      my="8px"
                      display={{ base: "none", md: "flex", xl: "flex" }}
                    >
                      <Text as="span" fontWeight="700" color="var(--primary)">
                        {post.category}
                      </Text>
                      <Text
                        as="span"
                        borderX="1px solid var(--lightTextColor3)"
                        px="6px"
                      >
                        {post.date}
                      </Text>
                      <Flex gap="10px" align="center">
                        <Text as="span">{post.comments}</Text>
                        <AiOutlineComment />
                      </Flex>
                    </Flex>
                    <Text>{post.content}</Text>
                  </Stack>
                </Stack>
              </Link>
            ))
            .slice(0, 2)}
        </Flex>
      </Container>
    </Box>
  );
}
