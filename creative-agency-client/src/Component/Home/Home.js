import React from 'react';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import HeaderMiddle from './HeaderMiddle/HeaderMiddle';
import HeaderTop from './HeaderTop/HeaderTop';
import './Home.css';
import Service from './Service/Service';
import background from '../../images/logos/background.png';

import {Card} from 'react-bootstrap';
import Works from './Works/Works';
import Feedback from './Feedback/Feedback';
import SendForm from './SendForm/SendForm'

const Home = () => {
    return (
        <div className="body">
        <Card>
        <Card.Img src= {background} alt=""/>
        <Card.ImgOverlay>
        
                     
            <HeaderTop></HeaderTop>
            <HeaderMiddle></HeaderMiddle>
            <HeaderBottom></HeaderBottom>
            <Service></Service>
            <Works></Works>
            <Feedback></Feedback>
            <SendForm></SendForm>

        </Card.ImgOverlay>
        </Card>
            
           
      
        </div>
    );
};

export default Home;