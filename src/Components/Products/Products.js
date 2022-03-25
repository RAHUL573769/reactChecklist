import React, { useEffect, useState } from 'react';
import Single from '../Singleproducts/Single';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);

        useEffect(() => {
           fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
        }, [])
    return (


        <div>
            <div className='row'>
 {
                products.map((product)=>(<Single product={product}></Single>))
    }
            </div>
           
        </div>
    );
};

export default Products;