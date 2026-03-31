import React from "react";
const Cart = ({item}) => {
  return (
    <div className="flex justify-between items-center p-5 bg-[#F9FAFC] rounded-2xl">
      <div className="flex items-center gap-2">
        <img className="h-10 w-10" src={item.icon} />
        <div>
          <h1>{item.name}</h1>
          <p>${item.price}</p>
        </div>
      </div>
      <button className="btn btn-outline btn-error">Remove</button>
    </div>
  );
};

export default Cart;
