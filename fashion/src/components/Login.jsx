import { Checkbox, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineGoogle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
export default function Login({ onSignUpClick, onCloseLoginModal }) {
  return (
    <Stack px="40px">
      <Text color="var(--lightTextColor3)" fontSize="14px" textAlign="center">
        Sign in to your account using email and password provided during
        registration.
      </Text>
      <form>
        <Stack
          gap="16px"
          pb="8px"
          borderBottom="1px solid var(--lightBorderColor)"
        >
          <Text as="label" color="var(--darkTextColor2)" fontSize="14px">
            Email
          </Text>
          <input
            type="text"
            className="loginInput"
            placeholder="Your working email"
            fontSize="12px"
          />

          <Text as="label" color="var(--darkTextColor2)" fontSize="14px">
            Password
          </Text>
          <input
            type="password"
            className="loginInput"
            placeholder="Password"
          />

          <Flex align="center" justify="space-between" gap="10px" mt={4}>
            <Checkbox color="var(--darkTextColor2)">Keep me signed in</Checkbox>
            <Text fontSize="14px" color="var(--primary)">
              Forgot Password?
            </Text>
          </Flex>
          <Flex
            bg="var(--primary)"
            color="var(--light)"
            w="full"
            borderRadius="4px"
            justify="center"
            align="center"
            py="10px"
            border="1px solid var(--primary)"
            _hover={{
              bg: "transparent",
              color: "var(--primary)",
              transition: "0.8s",
              cursor: "pointer",
            }}
          >
            Sign in
          </Flex>
          <Text>
            Don't have an account?
            <Text
              onClick={() => {
                onSignUpClick();
                onCloseLoginModal();
              }}
              as="span"
              color="var(--primary)"
              ml="4px"
              cursor="pointer"
            >
              Sign up
            </Text>
          </Text>
        </Stack>
      </form>

      <Text textAlign="center" fontSize="14px" color="var(--lightTextColor3)">
        Or sign in with
      </Text>
      <Flex
        gap="10px"
        mt="10px"
        color="var(--light)"
        pb="22px"
        justify="center"
      >
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
            <AiOutlineGoogle color="var(--lightTextColor3)" />
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
    </Stack>
  );
}
