import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Works.css';
import caro1 from '../../../images/carousel1.png';
import caro2 from '../../../images/carousel2.png';
import caro3 from '../../../images/carousel3.png';
import caro4 from '../../../images/carousel4.png';
import caro5 from '../../../images/carousel5.png';

const Works = () => {
    return (
        
        <div className="work">
            <h2>Here are some of Our Works</h2>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block "
                    src={caro1}
                    alt="First slide"
                    />
                    <Carousel.Caption className="text">
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block "
                    src={caro2}
                    alt="Third slide"
                    />

                    <Carousel.Caption className="text">
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block "
                    src={caro3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block"
                    src={caro4}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block"
                    src={caro5}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Fifth slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            
        </div>
    );
};

export default Works;