import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useEffect, useState } from 'react';
import axios from 'axios';
import authService from '../componenti/servizi';
import SchedaOrdine from '../componenti/SchedaOrdine';
import Row from 'react-bootstrap/esm/Row';


export default function OrdiniUtente() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [post, setPost] = useState();

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  useEffect(() => {
    axios.get("http://localhost:5000/api/order/showuser", { params: { username: currentUser?.username } })
      .then((res) => {
        setPost(res.data)

      })
  })



  return (
    <Container className='album py-5 bg-light' style={{"marginTop":"10vh"}}>
      <Row>
        {
          post?.map(card => <SchedaOrdine
            key={card._id}
            proprietario = {card.idLocale}
            items={card.items}
            titolo={[card.giorno, card.mese, card.anno]}
          />)
        }
      </Row>
    </Container>
  )
}
