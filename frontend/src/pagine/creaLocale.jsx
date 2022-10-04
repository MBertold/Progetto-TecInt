import NavbarMenu from "../componenti/NavbarMenu";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Ristoranti() {
  const [name, setName] = useState('pippo')
  const [email, setEmail] = useState('pippo@pippo.com')
  const [password, setPassword] = useState('pippo')
  const [tags,setTags] = useState('pippo')
  const [address,setAddress]= useState('pippo')
  const navigate = useNavigate();
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleTags = (e) => {
    setTags(e.target.value)
  }
  const handleAddress = (e) => {
    setAddress(e.target.value)
  }
  const handleApi = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/shop/shopRegister', {
      name: name,
      email: email,
      password: password,
      tags:tags,
      address:address
    })
    .then((result) => {
      console.log(result)
      if (result.data.accessToken) {
        localStorage.setItem("shop", JSON.stringify(result.data))
        navigate("/ristorante");
      }
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <>
      <NavbarMenu />
      <Container style={{ "display": "flex", "justifyContent": "center", "height": "80vh", "alignItems": "center" }}>
        <Form onSubmit={handleApi}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='username' value={email} onChange={handleEmail}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={handlePassword}/>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridName">
            <Form.Label>Nome Locale</Form.Label>
            <Form.Control type="text" name='name' value={name} onChange={handleName}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridTags">
            <Form.Label>Tags</Form.Label>
            <Form.Control type="text" name='tags' value={tags} onChange={handleTags}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Indirizzo</Form.Label>
            <Form.Control type="text" name='address' value={address} onChange={handleAddress}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default Ristoranti;