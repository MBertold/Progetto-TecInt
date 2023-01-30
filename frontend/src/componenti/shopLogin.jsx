import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function ShopLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleApishop = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/shop/shoplogin', {
            email: email,
            password: password
        }).then((result) => {
            if (result.data.shop) {
                localStorage.setItem("shop", JSON.stringify(result.data.shop));
                navigate("/ristorante");
            }else{
                alert('Please check your username and password')
            }

        })
    }


    return (

        <Form style={{ padding: "10px", "width": "100%" }} onSubmit={handleApishop}>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name='email' value={email} onChange={handleEmail} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={handlePassword} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    )
}

export default ShopLogin;