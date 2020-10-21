import React from 'react';
import './Service.css'
import {Container, Row, Col, Card, } from 'react-bootstrap';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import { Link} from 'react-router-dom';

const Service = () => {
    return (
        <Container className="service">
            <div>
                <h3>Provide awesome <span className="span">Services</span></h3>
            </div>
            
            <Row>
                <Col sm>
                <Link to ="/Login">
                    <Card className="card1" >
                        
                    <Card.Img className="logo" variant="top" src={service1}/>
                   
                    <Card.Body>
                        <Card.Title>Web & Mobile Design</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                       
                    </Card.Body>
                    </Card>
                </Link>
                </Col>

                

                <Col sm>
                <Link to ="/Login">
                    <Card className="card2" >
                        <Card.Img className="logo" variant="top" src={service2}/>
                        <Card.Body>
                            <Card.Title>Graphic Design</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                </Link>

                </Col>
                <Col sm>
                <Link to ="/Login">        
                         <Card className="card3" >
                            <Card.Img className="logo" variant="top" src={service3}/>
                            <Card.Body>
                            <Card.Title>Web Development</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            </Card.Body>
                         </Card>
                </Link>
                </Col>
                
            </Row>
        </Container>
    );
};

export default Service;