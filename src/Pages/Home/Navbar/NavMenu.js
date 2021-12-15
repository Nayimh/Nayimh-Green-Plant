import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavMenu.css'
const NavMenu = () => {
    return (
        <>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"> <span className='green'>Green</span> <span className='red'>Plant</span> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Explore Plants</Nav.Link>
      <Nav.Link href="#pricing">Dashboard</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"> <span className='orange'>Signed as</span> </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        <span className='blue'>name</span>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default NavMenu;