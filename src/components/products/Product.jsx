import React, { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "react-toastify";
const Product = ({ product, cartItems, setCartItems}) => {
  const [isSelected,setIsSelected]=useState(false);
  const { name, description, tagType, price, period, features, icon } = product;
  const handleBuy=()=>{
    const isExist=cartItems.find(item=>item.id===product.id)
    if(isExist){
      toast.error("Item already in cart!")
      return;
    }
    toast.success("Added to cart successfully!")
    const newItem=[...cartItems,product]
    setCartItems(newItem)
    setIsSelected(true)
  }
  return (
    <div className="border-2 border-[#F1F1F1] rounded-2xl p-6 flex flex-col gap-2">
      <span
        className={`px-3 py-1.5 self-end rounded-full ${product.tagType === "Best-seller" ? "text-[#BB4D00] bg-[#FEF3C6]" : product.tagType === "Popular" ? "text-[#4F39F6] bg-[#E1E7FF]" : "text-[#0A883E] bg-[#DBFCE7]"}`}
      >
        {tagType}
      </span>
      <div className="bg-[#F2F2F2] h-15 w-15 p-3.5 rounded-full flex justify-center items-center">
        <img className="h-10 w-10" src={icon} alt={icon} />
      </div>
      <div className="space-y-4 mt-4 grow">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-[#627382]">{description}</p>
        <div>
          <span className="text-2xl font-bold">${price}</span>{" "}
          <span className="text-[#627382]">/{period}</span>
        </div>
        <ul>
          {features.map((item, index) => (
            <li
              className="flex items-center text-[#627382] text-[16px]"
              key={index}
            >
              <Check className="mr-1 size-4 text-green-500" /> {item}
            </li>
          ))}
        </ul>
      </div>
      <button className={`btn text-[16px] font-bold text-white border-none rounded-full mt-2 ${isSelected?'bg-linear-to-r from-[#04944c] to-[#8dbb23]':'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'}`} onClick={handleBuy}>{isSelected?'Added to cart':'Buy Now'}</button>
    </div>
  );
};

export default Product;
