import React from 'react';
import { Link } from 'react-router-dom';

const ServiceList = () => {
    return (
        <div className="row">
        
            <div className="col-md-3" style={{backgroundColor: 'white', marginLeft: "150px"}}>
                <Link to="/Order"><h6>Order</h6></Link>
                <br/>
                <Link to="/ServiceList"><div className="list-group-item list-group-item-action active"><h6>Service List</h6></div></Link>
                <br/>
                <Link to="/Review"><h6>Review</h6></Link>
            </div>

            <div className="col-md-5" style={{backgroundColor:'lightgrey', width:"600px", marginLeft: "150px"}}>         
            </div>
             <br/>         
        </div>
    );
};

export default ServiceList;