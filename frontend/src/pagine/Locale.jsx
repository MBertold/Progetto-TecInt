import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useEffect, useState } from 'react';
import authService from '../componenti/servizi';
import Button from "react-bootstrap/esm/Button";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Row from 'react-bootstrap/esm/Row';
import ItemCard from '../componenti/ItemCard';
export default function Locale() {
  const [currentShop, setCurrentShop] = useState(undefined);
  const [post, setPost] = useState();
  const [show, setShow] = useState(false);
  const [nome, setNome] = useState('pippo');
  const [descrizione, setDescrizione] = useState('pippo');
  const [prezzo, setPrezzo] = useState('1.35');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const shop = authService.getCurrentShop();
    if (shop) {
      setCurrentShop(shop);
    }
  }, []);
  useEffect(() => {

    axios.get("http://localhost:5000/api/item/show/", { params: { proprietario: currentShop?._id } })
      .then((res) => {
        setPost(res.data)

      })
  })
  const handleNome = (e) => {
    setNome(e.target.value)
  }
  const handleDescrizione = (e) => {
    setDescrizione(e.target.value)
  }
  const handlePrezzo = (e) => {
    setPrezzo(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/item/add/', {
      nome: nome,
      descrizione: descrizione,
      prezzo: prezzo,
      proprietario: currentShop?._id
    })
  }
  
  return (
    <>
      <Container>
        <Container className='py-5 text-center'>
          <Row className='py-lg-5'>
            <h1 className="fw-light">{currentShop?.name}</h1>
            <p className="lead text-muted">{currentShop?.tags}</p>
            <p className="lead text-muted">{currentShop?.address}</p>
            <p className="lead text-muted">{currentShop?.descrizione}</p>


          </Row>
        </Container>
        <br />
        <Container className='album py-5 bg-light'>
          <Container>
            <Row >
              {
                post?.map(card => (<ItemCard
                  key={card._id}
                  id={card._id}
                  nome={card.nome}
                  descrizione={card.descrizione}
                  prezzo={card.prezzo} />
                ))
              }
            </Row>
          </Container>
          <Row className='py-lg-5'>
            <Button variant='primary' onClick={handleShow}>
              Add item
            </Button>
          </Row>

        </Container>
      </Container>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>nome</Form.Label>
              <Form.Control type="text" value={nome} onChange={handleNome} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>descrizione</Form.Label>
              <Form.Control type="text" value={descrizione} onChange={handleDescrizione} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>prezzo</Form.Label>
              <Form.Control value={prezzo} onChange={handlePrezzo} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
