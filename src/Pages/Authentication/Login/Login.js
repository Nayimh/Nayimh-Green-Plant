import React, { useState } from 'react';
import { Badge, Form, Spinner } from 'react-bootstrap';
import './Login.css'
import img from '../../../image/banner3.jpg'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';

// import { useLocation } from 'react-router-dom';
const Login = () => {
    const { loginUser, isLoading, authError, user } = useAuth();
    const [loginData, setLoginData] = useState({});
    
    let nav = useNavigate();

    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
        
    }

    const handleLogin = e => {
        loginUser(loginData?.email, loginData?.password);   
        nav(-1)
    e.preventDefault()
}

    return (
        <div className='mt-5 pt-5'>
            <h1 className='text-center  logh'>Login</h1>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6 mb-5'>
                        {isLoading ? <Spinner animation="border" variant="success" />
                            :
                            <Form onSubmit={handleLogin} >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' onChange={handleOnchange} placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' onChange={handleOnchange} placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
   
  </Form.Group>
  <button type="submit" className='contactBtn'>Login</button>
                            </Form>}
                        <div>-------------or-------------</div>
                        {/* <button onClick={signInwithGoogle} className='contactBtn'>Login</button> */}
                        {
                            
                user?.email ? <Badge bg="success">Successfully LoggedIn</Badge > : " "
              }
              {
                authError ? <Badge bg="danger">{ authError }</Badge> : " "
              }
                        <div className='text-success shadow mt-3 rounded p-1'>
                            <h5>New User? Please <Link to="/register">Register</Link> </h5> OR
                            <Link to="/"><h5>Go Home</h5></Link>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <img className='w-100 rounded shadow' src={ img } alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;