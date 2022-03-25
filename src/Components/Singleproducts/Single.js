import React from 'react';

import './Single.css'

const Single = ({product, handleButton}) => {
   
    // console.log(props);


  
    const { title, image, price } = product||{};
   
 
    return (
        <div className='col-md-4'>
            <div className="card p-3">
 <h1>Title:{ title}</h1>
         <p> <img src={ image} alt="" /></p>
                <p> Price:${price}</p>
                
                <button onClick={handleButton} className='btn btn-success'> Add To Cart</button>
            </div>
           
        </div>
    );
};

export default Single;