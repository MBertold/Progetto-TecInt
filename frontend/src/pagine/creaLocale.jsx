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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tags,setTags] = useState('')
  const [address,setAddress]= useState('')
  const navigate = useNavigate();
  const handleApi = () => {
    axios.post('http://localhost:5000/api/shop/shopRegister', {
      name: name,
      email: email,
      password: password
    }).then((result) => {
      if (result.data.accessToken) {
        localStorage.setItem("shop", JSON.stringify(result.data))
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
    <>
      <NavbarMenu />
      <Container style={{ "display": "flex", "justifyContent": "center", "height": "80vh", "alignItems": "center" }}>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridName">
            <Form.Label>Nome Locale</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridTags">
            <Form.Label>Tags</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Indirizzo</Form.Label>
            <Form.Control type="text" />
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