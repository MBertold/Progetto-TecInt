import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useEffect, useState } from 'react';
import axios from 'axios';
import authService from '../componenti/servizi';
import SchedaOrdine from '../componenti/SchedaOrdine';
import Row from 'react-bootstrap/esm/Row';

export default function Ordini() {
  const [post, setPost] = useState();
  const [currentShop, setCurrentShop] = useState(undefined);
    useEffect(() => {
        const shop = authService.getCurrentShop();
        if (shop) {
            setCurrentShop(shop);
        }
    }, []);
  useEffect(() => {
    axios.get("http://localhost:5000/api/order/showuser", { params: { username: currentShop?._id } })
      .then((res) => {
        setPost(res.data)

      })
  })



  return (
    <Container >
      <Row>
        {
          post?.map(card => <SchedaOrdine
            key={card._id}
            items={card.items}
            titolo={[card.giorno, card.mese, card.anno]}
          />)
        }
      </Row>
    </Container>
  )
}

