import React from 'react';

import './Single.css'

const Single = (props) => {
   
    console.log(props);
    const { title, image, price } = props;
    console.log(title);
  
    return (
        <div className='col-md-4'>
            <div className="card p-3">
 <h1>Title:{ props.product?.title}</h1>
         <p> <img src={ props.product?.image} alt="" /></p>
                <p> Price:${props.product?.price}</p>
                
                <button className='btn btn-success'> Add To Cart</button>
            </div>
           
        </div>
    );
};

export default Single;