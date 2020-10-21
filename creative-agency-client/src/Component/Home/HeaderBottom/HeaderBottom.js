import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';
import './HeaderBottom.css'

const HeaderBottom = () => {
    return (
        <div className="brands" >
            <Container>
                    <Row >
                        <Col sm><img src={airbnb} alt="" className="customer-image" /></Col>
                        <Col sm><img src={google} alt="" className="customer-image"/></Col>
                        <Col sm><img src={netflix} alt="" className="customer-image"/></Col>
                        <Col sm><img src={slack} alt="" className="customer-image" /></Col>
                        <Col sm><img src={uber} alt="" className="customer-image"/></Col>
                    </Row>
            </Container>
        </div>
    );
};

export default HeaderBottom;