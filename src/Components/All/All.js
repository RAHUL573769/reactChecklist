import React from 'react';
import Cart from '../Cart/Cart';
import Menubar from '../Menubar/Menubar';
import Products from '../Products/Products';

const All = () => {
    return (

        <div>
            <Menubar></Menubar>
   <div className='container'>

            <div className='row'>
                <div className='col-md-10'>
     <Products></Products>
                </div>
            
       
                <div className='col-md-2'>

            <Cart></Cart>
                </div>
            
       
            
        </div>
        </div>

</div>
           
      
    );
};

export default All;