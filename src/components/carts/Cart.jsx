import React from "react";
import { toast } from "react-toastify";
const Cart = ({item, cartItems, setCartItems}) => {
  const handleRemove=()=>{
      const filteredCartItem=cartItems.filter(cartItem=>cartItem.id!==item.id)
      setCartItems([...filteredCartItem])
      toast.error('Item removed!')
  }
  return (
    <div className="flex justify-between items-center p-5 border border-[#eaedf3] bg-[#F9FAFC] rounded-2xl">
      <div className="flex items-center gap-2">
        <img className="h-10 w-10" src={item.icon} />
        <div>
          <h1>{item.name}</h1>
          <p>${item.price}</p>
        </div>
      </div>
      <button className="btn btn-outline btn-error" onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Cart;
