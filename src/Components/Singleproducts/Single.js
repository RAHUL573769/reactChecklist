import React from 'react';

const Single = (props) => {
   
    console.log(props);
    
  
    return (
        <div>
            <h1>Title:{ props.product?.title}</h1>
        </div>
    );
};

export default Single;