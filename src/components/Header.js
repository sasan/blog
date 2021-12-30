import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Container, Nav } from "react-bootstrap";
const Header = () => (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/'>
                    <b className="text-dark">Home</b>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/about/'>
                        <b className="text-dark">About us</b>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/contact/'>
                        <b className="text-dark">Contact us</b>
                    </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;