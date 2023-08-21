import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";
import { Box, Text } from "@chakra-ui/react";

export default function Category({ setCategory }) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Box p="30px">
      <Text fontSize="22px" fontWeight="bold" px="10px">
        CATEGORIES
      </Text>
      {categories.map((category, i) => {
        return (
          <Box
            key={i}
            py="6px"
            px="10px"
            my="10px"
            fontSize="18px"
            fontWeight="600"
            _hover={{
              cursor: "pointer",
              bg: "#efebe8",
            }}
            onClick={() => setCategory(category)}
          >
            {category}
          </Box>
        );
      })}
    </Box>
  );
}
