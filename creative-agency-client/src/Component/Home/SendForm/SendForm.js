import React from 'react';
import './SendForm.css';

const SendForm = () => {
    return (
        <div className="row Form-area">
             <div className="col-md-5 part-1">
                <h1>Let us handle your <br/> project, Professionally. </h1>
                <p>lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor incididunt <br/>eiusmod tempor incididunt.
                </p>
                {/* <button className="text-white bg-dark"  ><h5 margin="10px">Hire Us</h5></button>            */}
            </div>

            <div className="col-md-5 sendForm">
           
                        <form>
                            <p className="h4 text-center mb-4">Write to us</p>
                            

                            <input type="text" id="defaultFormContactNameEx" className="form-control" placeholder="Your Name"/>
                            <br />
                           
                            <input type="email" id="defaultFormContactEmailEx" className="form-control" placeholder="email address"/>
                            <br />
                            
                            <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" placeholder="Your Message" />
                            <div className="text-center mt-4">
                                    <button color="warning" outline type="submit" className="text-white bg-dark" >Send</button>
                            </div>
                        </form>
                        
            </div>
            <br/>    <br/>    <br/>
            <h6 style={{marginLeft:"40%", marginBottom:"50px"}}>copyright orange lab 2020</h6>
            
        </div>
    );
};

export default SendForm;