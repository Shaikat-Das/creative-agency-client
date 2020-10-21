import React from 'react';
import {Container, Row, Col, Card, } from 'react-bootstrap';
import './Feedback.css';
import Customer1 from '../../../images/customer1.png';
import Customer2 from '../../../images/customer2.png';
import Customer3 from '../../../images/customer3.png';

const Feedback = () => {
    return (
        <Container className="service">
        <div>
            <h3>Cliant's <span className="span">Feedback</span></h3>
        </div>
        
        <Row>
            <Col sm>
                <Card className="card1" >
                    
                <Card.Img className="logo" variant="top" src={Customer1}/>
               
                <Card.Body>
                    <Card.Title>Nash Patrik</Card.Title>
                    <p>CEO, Manpol</p>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                   
                </Card.Body>
                </Card>
            </Col>

            <Col sm>
            <Card className="card2" >
                <Card.Img className="logo" variant="top" src={Customer2}/>
                <Card.Body>
                    <Card.Title>Miriam Barron</Card.Title>
                    <p>CEO, Manpol</p>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                   
                </Card.Body>
                </Card>

            </Col>
            <Col sm>
            <Card className="card3" >
                <Card.Img className="logo" variant="top" src={Customer3}/>
                <Card.Body>
                    <Card.Title>Bria Malone</Card.Title>
                    <p>CEO, Manpol</p>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                   
                </Card.Body>
                </Card>

            </Col>
            
        </Row>
    </Container>
    );
};

export default Feedback;
