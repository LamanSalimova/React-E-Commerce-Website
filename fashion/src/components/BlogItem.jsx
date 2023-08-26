import { Image, Stack, Text, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { AiOutlineComment } from "react-icons/ai";
export default function BlogItem({ blog }) {
  return (
    <Stack gap="16px">
      <Box>
        <Image src={blog.imgUrl} alt="blog-image" w="full" />
      </Box>
      <Flex gap="10px" color="var(--lightTextColor3)">
        <Text>{blog.category}</Text>
        <Text>{blog.date}</Text>
        <Flex gap="10px" align="center">
          <Text>No comments</Text>
          <AiOutlineComment />
        </Flex>
      </Flex>
      <Text
        fontSize="20px"
        lineHeight="30px"
        fontWeight="700"
        color="var(--darkBgColor)"
      >
        {blog.title}
      </Text>
      <Text color="var(--darkTextColor2)">{blog.content}</Text>
    </Stack>
  );
}
