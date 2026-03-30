import React, { use } from 'react';

const Products = ({productsRes}) => {
    const products=use(productsRes)
    console.log(products)
    return (
        <div>
            {products.map(product=><img className='w-10 h-10' src={product.icon}/>)}
        </div>
    );
};

export default Products;