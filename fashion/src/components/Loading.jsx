import React from "react";
import loadingGif from "../assets/images/icons/loading.gif";
import { Flex } from "@chakra-ui/react";
export default function Loading() {
  return (
    <Flex w="full" h="full" align="center" justify="center">
      <img src={loadingGif} alt="loading" />
    </Flex>
  );
}
