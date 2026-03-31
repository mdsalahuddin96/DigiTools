import React, { use } from 'react';
import Product from './Product';

const Products = ({productsRes}) => {
    const products=use(productsRes)
    console.log(products)
    return (
        <div className='mt-10 max-w-300 mx-auto grid md:grid-cols-2 gap-7 lg:grid-cols-3 border-2 border-amber-300'>
            {products.map(product=><Product key={product.id} product={product}></Product>)}
        </div>
    );
};

export default Products;