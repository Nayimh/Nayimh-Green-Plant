import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Drawer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
             <div>
                <Button variant="primary" onClick={handleShow}>
        OPEN
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
                            <Link to="/dashboard"><button className='cardBtn'>Dashboard</button></Link>
                            <br />
                            <Link to="/addTree"><button className='cardBtn'>Add Tree</button></Link>
                            <Link to="/makeAdmin"><button className='cardBtn'>Make Admin</button></Link>
                            
        </Offcanvas.Body>
                    </Offcanvas>
                   
                </div>
        </div>
    );
};

export default Drawer;