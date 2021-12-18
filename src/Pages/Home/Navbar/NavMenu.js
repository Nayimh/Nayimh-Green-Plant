import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavMenu.css';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Firebase/Hooks/useAuth';
import { Link } from 'react-router-dom';
const NavMenu = () => {
  const { user, logOut } = useAuth();
    return (
        <>
           <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark" shadow>
  <Container>
  <Navbar.Brand > <span className='green'>Green</span> <span className='red'>Plant</span> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/explore">Explore Plants</Nav.Link>
     
     
      {/* <Nav.Link href="#pricing">Dashboard</Nav.Link> */}
    </Nav>
    <Nav>
             
               
                {user?.displayName &&
                  <Nav.Link > <span className='orange'>Signed as</span> </Nav.Link>}
     {user?.email && <Nav.Link > 
                  <span className='blue'>{ user?.displayName }</span>
                </Nav.Link>}
                {user?.email && <NavDropdown title="dashboard" >
          <Link to='/makeAdmin'><button className='cardBtn'>makeAdmin</button></Link>
          <Link to='/addTree'><button className='cardBtn'>Add Tree</button></Link>
          <Link to='/addTree'><button className='cardBtn'>Manage Order</button></Link>
          <Link to='/addTree'><button className='cardBtn'>Manage Tree</button></Link>
         
          <NavDropdown.Divider />
          <Link to='/makeAdmin'><button className='cardBtn'>makeAdmin</button></Link>
        </NavDropdown>}
                { user?.email ? 
             <Nav.Link>  <span onClick={logOut} className='orange'>LOGOUT</span> </Nav.Link>
                  :
                <Nav.Link as={HashLink} to="/login"> <span className='orange'>LOGIN</span> </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default NavMenu;