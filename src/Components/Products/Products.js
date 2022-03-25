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
            {
                products.map((product)=>(<Single product={product}></Single>))
    }
        </div>
    );
};

export default Products;