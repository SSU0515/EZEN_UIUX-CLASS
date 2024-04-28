import React from "react";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [query, setQuery] = useSearchParams();
  console.log(query.get("q"));
  return (
    <div>
      <div>Product All</div>
    </div>
  );
};

export default Product;
