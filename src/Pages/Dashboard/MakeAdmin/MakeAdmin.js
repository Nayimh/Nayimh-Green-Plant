import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import img from '../../../image/admin.png'
const MakeAdmin = () => {
    const [makeAdmin, setMakeAdmin] = useState({});

 
    const handleEmail = e => {
        const value = (e.target.value);
        setMakeAdmin(value);
    }

    const handleAdmin = (e) => {
        console.log(makeAdmin);
        e.target.reset();
        e.preventDefault();
    }

    return (
        <div>
            
            <div className='container text-center'>
                <img className='w-25 my-5 py-5' src={img} alt="" />
                <div>
                <Form onSubmit={handleAdmin}>
  <Form.Group className="mb-3" >
    <Form.Label className='text-bold'>Make Admin</Form.Label>
    <Form.Control type="email" name='email' onChange={handleEmail}  placeholder="Admin email" required/>
  
  </Form.Group>

  
  <button type='submit' className='cardBtn'>Make Admin</button>
</Form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;