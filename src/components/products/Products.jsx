import React, { use } from 'react';
import Product from './Product';

const Products = ({productPromise, cartItems, setCartItems}) => {
    const products=use(productPromise)
    return (
        <div className='mt-10 max-w-300 mx-auto grid md:grid-cols-2 gap-7 lg:grid-cols-3'>
            {products.map(product=><Product key={product.id} cartItems={cartItems} setCartItems={setCartItems} product={product}></Product>)}
        </div>
    );
};

export default Products;