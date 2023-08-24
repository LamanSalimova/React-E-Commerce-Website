import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import profileIcon from "../../assets/images/icons/profile.png";
export default function Topbar() {
  return (
    <Box bg="var(--darkBgColor)">
      <Container maxW="1140px">
        <Flex justify="space-between" align="center" py="8px">
          <Text color="var(--lightTextColor4)">
            Available 24/7 at{" "}
            <Text as="span" fontWeight="900">
              (405) 555-0128
            </Text>
          </Text>
          <Flex gap="10px" justify="center" align="center">
            <Box>
              <Image objectFit="contain" src={profileIcon} />
            </Box>
            <Flex color="var(--lightTextColor4)">
              <Text>Login</Text>
              <Text as="span">/</Text>
              <Text>Register</Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
