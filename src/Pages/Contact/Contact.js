import React from 'react';
import './Contact.css'
import img from '../../image/banner3.jpg'
import {  Form } from 'react-bootstrap';
const Contact = () => {
    return (
        <div className='my-5 py-5 container'>
            <h1 className='text-center my-5 contacth'>CONTACT US</h1>
            <div className='row mt-5'>
                <div className='col-lg-7 col-md-7 col-sm-12 '>
                <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    {/* <Form.Check type="checkbox" label="Check me out" /> */}
  </Form.Group>
  <button className='contactBtn'>Submit</button>
</Form>
            </div>
                <div className='col-lg-5 col-md-5 col-sm-12 mt-5'>
                    <img className='w-100' src={img} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Contact;