import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useEffect, useState } from 'react';
import axios from 'axios';
import authService from '../componenti/servizi';
import SchedaOrdineShop from '../componenti/SchedaOrdineShop';
import Row from 'react-bootstrap/esm/Row';


export default function OrdiniUtente() {
  const [currentShop, setCurrentShop] = useState(undefined);
  const [post, setPost] = useState();

  useEffect(() => {
    const shop = authService.getCurrentShop();
    if (shop) {
      setCurrentShop(shop);
    }
  }, []);
  useEffect(() => {
    axios.get("http://localhost:5000/api/order/showshop", { params: { id: currentShop?._id } })
      .then((res) => {
        setPost(res.data)

      })
  })



  return (
    <Container style={{"marginTop":"10vh"}}>
      <Row>
        {
          post?.map(card => <SchedaOrdineShop
            key={card._id}
            cliente ={card.nomeUtente}
            items={card.items}
            titolo={[card.giorno, card.mese, card.anno]}
          />)
        }
      </Row>
    </Container>
  )
}
