import React from 'react';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
const HeaderTop = () => {
    return (
        <Navbar expand="lg">
             <Navbar.Brand  className="ml-5 mr-5" href="#home">
                 <img
        src={logo}
        width="150"
        height="50"
        className="d-inline-block align-top"
        alt="logo"
      /></Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ml-5">
                    <Nav.Link className="ml-5" href="#home">Home</Nav.Link>
                    <Nav.Link className="ml-5" href="#Our Portfolio">Our Portfolio</Nav.Link>
                    <Nav.Link className="ml-5" href="#Our Team">Our Team</Nav.Link>
                    <Nav.Link className="ml-5" href="#Contact Us">Contact Us</Nav.Link>
                    <Link to ="/Login"><Form inline>
                        <Button className="ml-5 mr-5" type="submit">Login</Button>
                    </Form>
                    </Link>
                </Nav>
                
            </Navbar.Collapse>
            </Navbar>
    );
};

export default HeaderTop;