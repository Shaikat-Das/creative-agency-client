import React from 'react';
import { Link } from 'react-router-dom';


const Order = () => {

        return (
        
        <div className="row">
        
        <div className="col-md-3" style={{backgroundColor: 'white', marginLeft: "150px"}}>
           <Link to="/Order"><div className="list-group-item list-group-item-action active"><h6>Order</h6></div></Link>
           <br/>
           <Link to="/ServiceList"><h6>Service List</h6></Link>
           <br/>
           <Link to="/Review"><h6>Review</h6></Link>
       </div>

       <div className="col-md-5" style={{backgroundColor:'lightgrey', width:"600px", marginLeft: "150px"}}>
      
                   <form style={{marginBottom: "50px"}}>
                       <p className="h4 text-center mb-4">Order</p>
                       

                       <input type="text" id="defaultFormContactNameEx" className="form-control" placeholder="Your Name"/>
                       <br />
                      
                       <input type="email" id="defaultFormContactEmailEx" className="form-control" placeholder=" Your email address"/>
                       <br />
                       <input type="text" id="defaultFormContactNameEx" className="form-control" placeholder="Graphic Design"/>
                       <br />
                       <br/>
                       
                       <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" placeholder="Project Details" style={{maxWidth: '950px', Height: '400px'}} />
                       <br />

                       <input type="text" id="defaultFormContactNameEx" className="form-control" placeholder="Price" style={{maxWidth: '250px'}}/>
                       <br />

                       <div className="text-center mt-4">
                               <button color="warning" outline type="submit" className="text-white bg-dark" >Send</button>
                       </div>
                   </form>

                                     
       </div>
       <br/>    <br/>    <br/>

       
   </div>
    );
};

export default Order;