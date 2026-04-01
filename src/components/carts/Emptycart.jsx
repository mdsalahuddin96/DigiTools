import React from 'react';
import { ShoppingCart } from 'lucide-react';
const Emptycart = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-4 p-20'>
            <ShoppingCart color='#627382' size={50}></ShoppingCart>
            <p className='text-[#627382] md:text-lg'>Your cart is empty</p>
        </div>
    );
};

export default Emptycart;