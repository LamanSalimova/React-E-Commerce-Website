import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";
import { Box, Text } from "@chakra-ui/react";

export default function Category() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  console.log(categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Box>
      <h5>CATEGORIES</h5>
      {categories.map((category, i) => {
        return (
          <Box key={i} py="6px" my="10px" bg="gray.100">
            {category}
          </Box>
        );
      })}
    </Box>
  );
}
