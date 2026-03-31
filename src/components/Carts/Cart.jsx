import React from "react";
import designTool from '@/assets/products/design-tool.png'
const Cart = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-[#F9FAFC] rounded-2xl">
      <div className="flex items-center gap-2">
        <img src={designTool} />
        <div>
          <h1>Writing Ai Tool</h1>
          <p>$29</p>
        </div>
      </div>
      <button className="btn btn-outline btn-error">Remove</button>
    </div>
  );
};

export default Cart;
