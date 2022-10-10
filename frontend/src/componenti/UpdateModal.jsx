import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
export default function UpdateModal(props) {
  const [nome, setNome] = useState(props.nome);
  const [descrizione, setDescrizione] = useState(props.descrizione);
  const [prezzo, setPrezzo] = useState(props.prezzo);
  const handleSubmitPut = event => {
    event.preventDefault();


    axios.put(`http://localhost:5000/api/item/put/${props.id}`, {
      nome: nome,
      descrizione: descrizione,
      prezzo: prezzo
    })
  }
  const handleNome = (e) => {
    setNome(e.target.value)
  }
  const handleDescrizione = (e) => {
    setDescrizione(e.target.value)
  }
  const handlePrezzo = (e) => {
    setPrezzo(e.target.value)
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modifica
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmitPut}>
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
            Salva
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};