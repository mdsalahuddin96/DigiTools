import React from "react";
import Cart from "./Cart";
import Emptycart from "./Emptycart";

const Carts = ({ cartItem }) => {
  const total = cartItem.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="max-w-300 mx-auto mt-10 p-10 space-y-2 rounded-2xl border-2 border-[#F1F1F1]">
      <h1 className="text-2xl font-bold">Your carts</h1>
      {cartItem.length == 0 ? (
        <Emptycart></Emptycart>
      ) : (
        <div>
          <div className="flex flex-col gap-3">
            {cartItem.map((item) => (
              <Cart key={item.id} item={item}></Cart>
            ))}
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg text-[#627382]">Total:</p>
            <p className="text-2xl font-bold">${total}</p>
          </div>
          <button className="btn w-full text-[16px] font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-lg">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Carts;
