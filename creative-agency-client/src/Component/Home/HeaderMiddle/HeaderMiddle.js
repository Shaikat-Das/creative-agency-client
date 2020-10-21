import React from 'react';
import frame from '../../../images/logos/frame.png';

import './HeaderMiddle.css';
const HeaderMiddle = () => {
    return (
        <main className="row">
           
            <div className="col-md-5 part-1">
                <h1>Let's Grow Your<br/> Brand To The <br/> Next Level </h1>
                <p>lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor incididunt <br/>eiusmod tempor incididunt.
                </p>
                <button className="text-white bg-dark"  ><h5 margin="10px">Hire Us</h5></button>           
            </div>

            <div className="col-md-6">
                <img src={frame} alt="" paddingLeft="15%" width="80%" height="80%"/>
            </div>
         
        </main>
    );
};

export default HeaderMiddle;