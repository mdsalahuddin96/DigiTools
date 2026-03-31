import React from "react";

const Product = ({ product }) => {
  return (
    <div className="shadow-lg rounded-2xl p-6 ">
      <div className="flex justify-end">
        <span
          className={`px-3 py-1.5 rounded-full ${product.tagType === "Best-seller" ? "text-[#BB4D00] bg-[#FEF3C6]" : product.tagType === "Popular" ? "text-[#4F39F6] bg-[#E1E7FF]" : "text-[#0A883E] bg-[#DBFCE7]"}`}
        >
          {product.tagType}
        </span>
      </div>
      <div className="bg-[#F2F2F2] h-15 w-15 p-3.5 rounded-full flex justify-center items-center">
        <img src={product.icon} alt={product.icon} />
      </div>
      <div className="space-y-4 mt-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-[#627382]">{product.description}</p>
        <div>
          <span className="text-2xl font-bold">${product.price}</span>{" "}
          <span className="text-[#627382]">/{product.period}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
