import { Box, Container, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { BiMessageRoundedDetail, BiLogoTwitter } from "react-icons/bi";
import { BsChevronRight, BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";
export default function Contact() {
  return (
    <>
      <Box bg="var(--lightBgColor)" py="10px">
        <Container maxW="1140px">
          <Flex gap="10px" color="var(--darkTextColor2)" align="center">
            <Link to={ROUTES.HOME}>
              <GrHomeRounded />
            </Link>
            <BsChevronRight />
            <Text color="var(--lightTextColor5)">Contacts</Text>
          </Flex>
        </Container>
      </Box>
      <Container maxW="1140px">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "1fr 2fr",
            lg: "1fr 3fr",
          }}
          py="40px"
          gap={{ base: "20px", md: "30px", lg: "0" }}
        >
          <Text
            as="h3"
            color="var(--primary)"
            fontSize="28px"
            fontWeight="700"
            lineHeight="42ox"
          >
            Contact us
          </Text>
          <Stack>
            <Text
              fontSize="20px"
              lineHeight="30px"
              color="var(--darkBgColor)"
              fontWeight="700"
            >
              If you have any questions, concerns or comments, we would love to
              hear from you! Submit your query using any of the methods below:
            </Text>
            <Stack gap="10px" my="24px">
              <Flex gap="10px" color="var(--primary)" align="center">
                <BsPhone size={20} />
                <Text color="var(--darkTextColor2)" fontWeight="600">
                  (405) 555-0128
                </Text>
              </Flex>
              <Flex gap="10px" color="var(--primary)" align="center">
                <AiOutlineMail size={20} />
                <Text color="var(--darkTextColor2)" fontWeight="600">
                  Send us an email
                </Text>
              </Flex>
              <Flex gap="10px" color="var(--primary)" align="center">
                <BiMessageRoundedDetail size={20} />
                <Text color="var(--darkTextColor2)" fontWeight="600">
                  Connect on Messenger
                </Text>
              </Flex>
              <Flex gap="10px" color="var(--primary)" align="center">
                <BiLogoTwitter size={20} />
                <Text color="var(--darkTextColor2)" fontWeight="600">
                  Tweet us
                </Text>
              </Flex>
            </Stack>

            <Text
              fontSize="20px"
              lineHeight="30px"
              color="var(--darkBgColor)"
              fontWeight="700"
              my="20px"
            >
              Or get in touch with us by completing the below form:
            </Text>

            <form>
              <Stack gap="20px">
                <Flex
                  justify="space-between"
                  flexDirection={{ base: "column", md: "row", xl: "row" }}
                  gap={{ base: "20px", md: "0", xl: "0" }}
                >
                  <Stack w={{ base: "full", md: "45%", xl: "48%" }}>
                    <label color="var(--darkTextColor2)">Full Name*</label>
                    <input
                      type="text"
                      placeholder="Your working email"
                      className="contactInput"
                    />
                  </Stack>
                  <Stack w={{ base: "full", md: "45%", xl: "48%" }}>
                    <label color="var(--darkTextColor2)">Email*</label>
                    <input
                      type="text"
                      placeholder="Your email"
                      className="contactInput"
                    />
                  </Stack>
                </Flex>
                <Flex
                  justify="space-between"
                  flexDirection={{ base: "column", md: "row", xl: "row" }}
                  gap={{ base: "20px", md: "0", xl: "0" }}
                >
                  <Stack w={{ base: "full", md: "45%", xl: "48%" }}>
                    <label color="var(--darkTextColor2)">Phone</label>
                    <input
                      type="text"
                      placeholder="Your phone number"
                      className="contactInput"
                    />
                  </Stack>
                  <Stack w={{ base: "full", md: "45%", xl: "48%" }}>
                    <label color="var(--darkTextColor2)">Subject</label>
                    <input
                      type="text"
                      placeholder="Title your message"
                      className="contactInput"
                    />
                  </Stack>
                </Flex>
                <label color="var(--darkTextColor2)">Message*</label>
                <textarea
                  placeholder="Write your message here"
                  className="contactInput"
                  rows={5}
                />

                <Flex
                  w={{ base: "full", md: "40%", xl: "40%" }}
                  bg="var(--primary)"
                  color="var(--light)"
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
                  Send message
                </Flex>
              </Stack>
            </form>
          </Stack>
        </Grid>
      </Container>
    </>
  );
}
