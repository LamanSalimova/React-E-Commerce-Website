import React from "react";
import { Select } from "@chakra-ui/react";

export default function Sorting({ setSort }) {
  return (
    <Select
      onChange={(e) => setSort(e.target.value)}
      placeholder="All"
      bg="#fff5bf"
      outline="none"
    >
      <option value="increment">Price: Low to High</option>
      <option value="decrement">Price: High to Low</option>
    </Select>
  );
}
