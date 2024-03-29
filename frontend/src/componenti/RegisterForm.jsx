import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleAddress = (e) => {
    setAddress(e.target.value)
  }

  const handleApi = () => {
    axios.post('http://localhost:5000/api/auth/register', {
      username: username,
      email: email,
      password: password,
      address:address
    }).then((result) => {
      if (result.data.savedUser) {
        localStorage.setItem("user", JSON.stringify(result.data.savedUser))
        navigate("/");
        window.location.reload();
      }else{
        alert("Utente già registrato");
      }
    })
  }


  return (
    <Form style={{ padding: "10px", "width": "100%" }} onSubmit={handleApi}>
      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" name='username' value={username} onChange={handleUsername} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={handleEmail} />
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={handlePassword} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" name='address' value={address} onChange={handleAddress} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Register;