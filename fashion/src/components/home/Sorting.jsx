import React from "react";
import { Select } from "@chakra-ui/react";

export default function Sorting() {
  return (
    <Select placeholder="All" bg="#fff5bf" outline="none">
      <option value="option1">Price: Low to High</option>
      <option value="option2">Price: High to Low</option>
    </Select>
  );
}
