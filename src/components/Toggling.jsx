// import React, { useState } from "react";

const Toggling = ({activeTab,setActiveTab}) => {
    
    
  return (
    <div className="max-w-300 mx-auto flex flex-col text-center items-center mt-21.5 space-y-4 border-2 border-amber-300">
      <h1 className="text-5xl font-extrabold">Premium Digital Tools</h1>
      <p className="text-[16px] text-[#627382]">
        Choose from our curated collection of premium digital products designed
        <br />
        to boost your productivity and creativity.
      </p>
      <div className="flex">
        <button className={activeTab==='product'?'btn text-[16px] font-bold text-white border-none rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]':'btn text-[16px] font-bold border-none rounded-full'} onClick={()=>setActiveTab('product')}>
            Products
        </button>
        <button className={activeTab==='cart'?'btn text-[16px] font-bold text-white border-none rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]':'btn text-[16px] font-bold border-none rounded-full'} onClick={()=>setActiveTab('cart')}>
            Carts <span>(2)</span>
        </button>
      </div>
    </div>
  );
};

export default Toggling;
