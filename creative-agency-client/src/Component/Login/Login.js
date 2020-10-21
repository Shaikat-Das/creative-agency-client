import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config'
import '../../../src/App.css';
import { Link} from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
   
                const [user, setUser] = useState({
                    isSignedIn: false,
                    name: '',
                    email: ''      
            })
        
    
   
    const provider = new firebase.auth.GoogleAuthProvider();


    
            const handleSignIn = () =>{
                firebase.auth().signInWithPopup(provider)
                .then(function(result) {
                
                    const {displayName, email} = result.user;
                    const signedInUser ={
                        isSignedIn: true,
                        name: displayName, 
                        email: email           
                    }
                    setUser(signedInUser);

                })
                .catch(function(error) {
                    var errorMessage = error.message;
                    console.log (error);
                });
                    
            }

            // For sign out 
            const handleSignOut = () =>{
                firebase.auth().signOut()
                
                .then(function() {
                    const signedOutUser = {
                        isSignedIn: false,
                        name: '',
                        email: ''
                    }
                    setUser(signedOutUser);
                })
                .catch(function(error) {
                    // An error happened.
                });
            }

    


    return (
        <div style= {{margin:'200px 500px', border: '1px solid black', borderRadius:'4px', padding: '30px'}}>
            <div style={{textAlign:"center" }}>
                        {
                            user.isSignedIn &&  
                            <div className="welcome-message">
                            <h2><strong>Welcome, {user.name}</strong> </h2>
                            <Link to ="/Order"> Click to Order </Link>
                            <br/> <br/>
                            <Link to ="/ServiceList"> Click to check Service list</Link>
                            <br/> <br/>
                            <Link to ="/Review"> Click to Review ordered list </Link>
                            <br/> <br/>
                            </div>
                        }
            </div>
            
            <div style={{textAlign:"center" }}>
                    { user.isSignedIn ?  <button onClick={handleSignOut} 
                            className="btn btn-success" >Enter or Sign out to exit</button>:
                        <div className="log-in">
                            <h3>Log In with</h3>
                            <button onClick={handleSignIn} className="btn btn-success App" >Continue with Google</button>
                            <h4>Don't have an account?  <a href="https://www.gmail.com">Sign Up with Google</a></h4>
                        </div>
                    }           
            </div>

        </div>
    );
};

export default Login;