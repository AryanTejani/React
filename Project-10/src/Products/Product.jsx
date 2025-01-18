import React from "react";
import Card from "./Card";

const Product = ({result}) => {
  return (
    <div className="ml-[20rem] w-[75%] mx-auto">
      <div className="grid grid-cols-4 gap-6">
        {result}
      </div>
    </div>
  );
};

export default Product;
