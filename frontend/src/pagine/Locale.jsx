import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useEffect, useState } from 'react';
import authService from '../componenti/servizi';
import Button from "react-bootstrap/esm/Button";


import Row from 'react-bootstrap/esm/Row';

import ItemCard from '../componenti/ItemCard';
import axios from 'axios';
export default function Locale() {
  const [currentShop, setCurrentShop] = useState(undefined);
  const [post, setPost] = useState();
  useEffect(() => {
    const shop = authService.getCurrentShop();
    if (shop) {
      setCurrentShop(shop);
    }
  }, []);
  useEffect( () => {
    
    axios.get("http://localhost:5000/api/item/show/", { params: { proprietario: currentShop?._id } })
      .then((res) => {
        setPost(res.data)
       
      })
  })
  
  return (
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
             post?.map( card => (<ItemCard
              key={card._id}
              id = {card._id}
              nome={card.nome}
              descrizione={card.descrizione}
              prezzo={card.prezzo} />
            ))
          }
          </Row>
        </Container>
        <Row className='py-lg-5'>
          <Button variant='primary'>
            Add item
          </Button>
        </Row>

      </Container>
    </Container>
  )
}
