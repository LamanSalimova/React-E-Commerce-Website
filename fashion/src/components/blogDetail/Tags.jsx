import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Tags() {
  return (
    <Flex
      justify="space-between"
      pb="40px"
      mt="40px"
      borderBottom="1px solid var(--lightBorderColor2)"
      flexDirection={{ base: "column", md: "row", xl: "row" }}
      gap={{ base: "40px", md: "0", xl: "0" }}
    >
      <Flex
        gap="20px"
        align={{ base: "start", md: "center", xl: "center" }}
        w="full"
        flexDirection={{ base: "column", md: "row", xl: "row" }}
      >
        <Text>Tags:</Text>
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
        </Flex>
      </Flex>

      <Flex
        align={{ base: "start", md: "center", xl: "center" }}
        gap="22px"
        flexDirection={{ base: "column", md: "row", xl: "row" }}
      >
        <Text>Share:</Text>
        <Flex gap="10px" color="var(--light)" justify="center">
          <Flex
            justify="center"
            align="center"
            as="span"
            p="6px"
            borderRadius="4px"
            bg="var(--lightBgColor2)"
          >
            <Link to="#">
              <BiLogoFacebook color="var(--lightTextColor3)" />
            </Link>
          </Flex>
          <Flex
            justify="center"
            align="center"
            as="span"
            p="6px"
            borderRadius="4px"
            bg="var(--lightBgColor2)"
          >
            <Link to="#">
              <BiLogoInstagram color="var(--lightTextColor3)" />
            </Link>
          </Flex>
          <Flex
            justify="center"
            align="center"
            as="span"
            p="6px"
            borderRadius="4px"
            bg="var(--lightBgColor2)"
          >
            <Link to="#">
              <AiOutlineTwitter color="var(--lightTextColor3)" />
            </Link>
          </Flex>
          <Flex
            justify="center"
            align="center"
            as="span"
            p="6px"
            borderRadius="4px"
            bg="var(--lightBgColor2)"
          >
            <Link to="#">
              <FaLinkedinIn color="var(--lightTextColor3)" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
