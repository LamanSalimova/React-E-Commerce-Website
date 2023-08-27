import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function Tags() {
  return (
    <Stack pt="30px" mt="22px" borderTop="1px solid var(--lightBorderColor2)">
      <Text
        as="h4"
        fontSize="24px"
        lineHeight="32px"
        fontWeight="700"
        color="var(--darkBgColor)"
      >
        Tags
      </Text>
      <Flex wrap="wrap" gap="10px">
        <Text
          as="span"
          fontWeight="700"
          color="var(--lightTextColor3)"
          border="1px solid var(--lightBorderColor2)"
          borderRadius="4px"
          px="20px"
          py="8px"
          _hover={{
            bg: "var(--primary)",
            color: "var(--light)",
            transition: "0.8s",
          }}
        >
          #trends
        </Text>
        <Text
          as="span"
          fontWeight="700"
          color="var(--lightTextColor3)"
          border="1px solid var(--lightBorderColor2)"
          borderRadius="4px"
          px="20px"
          py="8px"
          _hover={{
            bg: "var(--primary)",
            color: "var(--light)",
            transition: "0.8s",
          }}
        >
          #inspiration
        </Text>
        <Text
          as="span"
          fontWeight="700"
          color="var(--lightTextColor3)"
          border="1px solid var(--lightBorderColor2)"
          borderRadius="4px"
          px="20px"
          py="8px"
          _hover={{
            bg: "var(--primary)",
            color: "var(--light)",
            transition: "0.8s",
          }}
        >
          #designers
        </Text>
        <Text
          as="span"
          fontWeight="700"
          color="var(--lightTextColor3)"
          border="1px solid var(--lightBorderColor2)"
          borderRadius="4px"
          px="20px"
          py="8px"
          _hover={{
            bg: "var(--primary)",
            color: "var(--light)",
            transition: "0.8s",
          }}
        >
          #kidsfashion
        </Text>
        <Text
          as="span"
          fontWeight="700"
          color="var(--lightTextColor3)"
          border="1px solid var(--lightBorderColor2)"
          borderRadius="4px"
          px="20px"
          py="8px"
          _hover={{
            bg: "var(--primary)",
            color: "var(--light)",
            transition: "0.8s",
          }}
        >
          #streetstyle
        </Text>
        <Text
          as="span"
          fontWeight="700"
          color="var(--lightTextColor3)"
          border="1px solid var(--lightBorderColor2)"
          borderRadius="4px"
          px="20px"
          py="8px"
          _hover={{
            bg: "var(--primary)",
            color: "var(--light)",
            transition: "0.8s",
          }}
        >
          #models
        </Text>
      </Flex>
    </Stack>
  );
}
