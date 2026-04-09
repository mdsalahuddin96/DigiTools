// import React, { useState } from "react";

import Heading from "./Heading";

const Toggling = ({activeTab, setActiveTab, cartItems}) => {
  const title='Premium Digital Tools';
  const description='Choose from our curated collection of premium digital products designed to boost your productivity and creativity.'
    
  return (
    <div className="max-w-300 mx-auto flex flex-col text-center items-center mt-28 space-y-4">
      <Heading title={title} description={description}/>
      <div className="flex">
        <button className={activeTab==='product'?'btn text-[16px] font-bold text-white border-none rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]':'btn text-[16px] font-bold border-none rounded-full'} onClick={()=>setActiveTab('product')}>
            Products
        </button>
        <button className={activeTab==='cart'?'btn text-[16px] font-bold text-white border-none rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]':'btn text-[16px] font-bold border-none rounded-full'} onClick={()=>setActiveTab('cart')}>
            Carts{cartItems.length>0&&<span>({cartItems.length})</span>}
        </button>
      </div>
    </div>
  );
};

export default Toggling;
