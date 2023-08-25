import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
export default function AccordionComp() {
  return (
    <Accordion allowMultiple>
      <AccordionItem my="10px">
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  lineHeight="30px"
                  fontWeight="700"
                  color="var(--darkBgColor)"
                >
                  Do I need to register to place an order?
                </Box>
                {isExpanded ? (
                  <AiOutlineMinus fontSize="12px" />
                ) : (
                  <AiOutlinePlus fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet
              elementum faucibus dignissim purus. Fusce parturient diam magna
              ullamcorper morbi semper massa ac facilisis.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem my="10px">
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  lineHeight="30px"
                  fontWeight="700"
                  color="var(--darkBgColor)"
                >
                  What is the estimated delivery time?
                </Box>
                {isExpanded ? (
                  <AiOutlineMinus fontSize="12px" />
                ) : (
                  <AiOutlinePlus fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem my="10px">
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  lineHeight="30px"
                  fontWeight="700"
                  color="var(--darkBgColor)"
                >
                  How can I pay for my order?
                </Box>
                {isExpanded ? (
                  <AiOutlineMinus fontSize="12px" />
                ) : (
                  <AiOutlinePlus fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet
              elementum faucibus dignissim purus. Fusce parturient diam magna
              ullamcorper morbi semper massa ac facilisis.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem my="10px">
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  lineHeight="30px"
                  fontWeight="700"
                  color="var(--darkBgColor)"
                >
                  Can I get a refund if the price has changed since I ordered
                  it?
                </Box>
                {isExpanded ? (
                  <AiOutlineMinus fontSize="12px" />
                ) : (
                  <AiOutlinePlus fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem my="10px">
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  lineHeight="30px"
                  fontWeight="700"
                  color="var(--darkBgColor)"
                >
                  Do you refund delivery charges if I return something?
                </Box>
                {isExpanded ? (
                  <AiOutlineMinus fontSize="12px" />
                ) : (
                  <AiOutlinePlus fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem my="10px">
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  lineHeight="30px"
                  fontWeight="700"
                  color="var(--darkBgColor)"
                >
                  Do you refund delivery charges if I return something?
                </Box>
                {isExpanded ? (
                  <AiOutlineMinus fontSize="12px" />
                ) : (
                  <AiOutlinePlus fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem my="10px">
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  lineHeight="30px"
                  fontWeight="700"
                  color="var(--darkBgColor)"
                >
                  What documents will be provided with the order?
                </Box>
                {isExpanded ? (
                  <AiOutlineMinus fontSize="12px" />
                ) : (
                  <AiOutlinePlus fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem my="10px">
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  lineHeight="30px"
                  fontWeight="700"
                  color="var(--darkBgColor)"
                >
                  Can I return the order to the courier if anything does not
                  suit me?
                </Box>
                {isExpanded ? (
                  <AiOutlineMinus fontSize="12px" />
                ) : (
                  <AiOutlinePlus fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}
