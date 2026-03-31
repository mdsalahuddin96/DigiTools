import React from 'react';
import Cart from './Cart';


const Carts = () => {
    return (
        <div className='max-w-300 mx-auto mt-10 p-10 space-y-2 border-2 border-amber-300'>
            <h1>Your carts</h1>
            <div>
                <Cart></Cart>
            </div>
            <div className='flex justify-between items-center'>
                <p>Total:</p>
                <p>$90</p>
            </div>
            <button className='btn w-full text-[16px] font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-full'>Proceed to Checkout</button>
        </div>
    );
};

export default Carts;