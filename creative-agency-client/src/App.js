import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Order from '../src/Component/Order/Order';
import ServiceList from './Component/ServiceList/ServiceList';
import Review from './Component/Review/Review';
import Login from './Component/Login/Login';



function App() {
  return (
    // <div>
    //   <Home></Home>
    // </div>

    <Router>
                   
              <Switch>
                    <Route path="/Home">
                      <Home></Home>
                    </Route>

                    <Route path="/Login">
                    <Login></Login>
                    </Route>

                    <Route path="/Order">
                     <Order></Order>
                    </Route>

                    <Route path="/ServiceList">
                     <ServiceList></ServiceList>
                    </Route>

                    <Route path="/Review">
                     <Review></Review>
                    </Route>

                    <Route exact path="/">
                      <Home></Home>
                    </Route>
              </Switch>  
            </Router>   


  );
}

export default App;
