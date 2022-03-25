import React, { useEffect, useState } from 'react';
import Single from '../Singleproducts/Single';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    // console.log(products);
  const handleButton = () => {
        console.log('hi');
    }
        useEffect(() => {
           fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
        }, [])
    return (


        <div className='shop'>


<div className='product-container'>
                
            <div className='row'>
 {
                    products.map((product) => (<Single key={ product.id}product={product} handleButton={ handleButton}></Single>))
    }

            </div>
            </div>
            
            <div className='cart-container'>
                <div className='row'>
                    
</div>
            </div>
           
        </div>
    );
};

export default Products;