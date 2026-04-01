import React from "react";
import Cart from "./Cart";
import Emptycart from "./Emptycart";
import { toast } from "react-toastify";

const Carts = ({ cartItems, setCartItems}) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const handleCheckout=()=>{
    setCartItems([]);
    toast.success('Payment Successful')
  }
  return (
    <div className="max-w-300 mx-auto mt-10 p-10 space-y-4 rounded-2xl border-2 border-[#F1F1F1]">
      <h1 className="text-2xl font-bold">Your carts</h1>
      {cartItems.length == 0 ? (
        <Emptycart></Emptycart>
      ) : (
        <div>
          <div className="flex flex-col gap-3">
            {cartItems.map((item) => (
              <Cart key={item.id} item={item} cartItems={cartItems} setCartItems={setCartItems}></Cart>
            ))}
          </div>
          <div className="flex justify-between items-center my-4">
            <p className="text-lg text-[#627382]">Total:</p>
            <p className="text-2xl font-bold">${total}</p>
          </div>
          <button className="btn w-full text-[16px] font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-lg" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Carts;
