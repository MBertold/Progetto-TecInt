import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('marco')
  const [password, setPassword] = useState('pippons')
  const navigate = useNavigate();
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/auth/login', {
      username: username,
      password: password
    }).then((result) => {
      if (result.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/");
        window.location.reload();
      }

    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }


  return (

    <Form style={{ padding: "10px", "width": "100%" }} onSubmit={handleApi}>

      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" name='username' value={username} onChange={handleUsername} />
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

export default Login;