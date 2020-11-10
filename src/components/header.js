import React from 'react';
import { Navbar, Nav } from "react-bootstrap";


function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">COGS MANAGER</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
            </Navbar>
        </>
    )
}

export default Header
