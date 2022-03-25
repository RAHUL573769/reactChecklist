import React from 'react';
import './Menubar.css'

const Menubar = () => {
    return (
        <div>
            <div className='container'>
                
                <div className="row">
                    <div className=" lo col-md-2">Logo</div>
                    <div className=" list-container col-md-10 ">
                        <li>Name</li>
                        <li>Contact</li>
                        <li>Cart</li>
                        <li>Login</li>
                        <li>Serach</li>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Menubar;