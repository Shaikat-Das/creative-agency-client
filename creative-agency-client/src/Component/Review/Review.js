import React from 'react';
import { Link } from 'react-router-dom';

const Review = () => {
    return (
        
        <div className="row">
        
            <div className="col-md-3" style={{backgroundColor: 'white', marginLeft: "150px"}}>
                <Link to="/Order"><h6>Order</h6></Link>
                <br/>
                <Link to="/ServiceList"><h6>Service List</h6></Link>
                <br/>
                <Link to="/Review"><div className="list-group-item list-group-item-action active"><h6>Review</h6></div></Link>
            </div>

            <div className="col-md-5" style={{backgroundColor:'lightgrey', width:"600px", marginLeft: "150px"}}>         
            </div>
             <br/>         
        </div>
    );
};

export default Review;