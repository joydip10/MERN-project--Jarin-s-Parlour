import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import icon from "./Group 33092.png";
import { Link } from "react-router-dom";
import UseAuth from './../../Hooks/UseAuth';

const Navigation = (props) => {
    const { user, logout, isLoading } = UseAuth();
    return (
        <div>
            {
                (isLoading === false) &&
                <Navbar collapseOnSelect expand="lg" variant="light">
                    <Container>
                        <Navbar.Brand>
                            <img
                                alt=""
                                src={icon}
                                width="120"
                                height="30"
                                className="d-inline-block align-top img-fluid"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="ms-auto">
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/ourProducts">Our Products</Nav.Link>
                                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                {
                                    !user.email &&
                                    <Button style={{ backgroundColor: '#ff1a1a', margin: '1px solid pink' }} className="px-4 pt-0 mt-1 mb-1" as={Link} to="/login">Log in</Button>
                                }
                                {
                                    (user.email) &&
                                    <Button onClick={logout}>Log Out {user.displayName}</Button>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            }
        </div>
    );
};

export default Navigation;