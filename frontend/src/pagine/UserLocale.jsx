import axios from 'axios';
import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import ProductCard from '../componenti/ProductCard';
export default function UserLocale(props) {
  const [post, setPost] = useState();
  const location = useLocation();



  useEffect(() => {

    axios.get("http://localhost:5000/api/item/show/", { params: { proprietario: location.state?.id } })
      .then((res) => {
        setPost(res.data)

      })
  })

  return (
    <Container>
      <Container className='py-5 text-center'>
        <Row className='py-lg-5'>
          <h1 className="fw-light">{location.state?.nome}</h1>
          <p className="lead text-muted">{location.state?.tags}</p>
          <p className="lead text-muted">{location.state?.address}</p>
          <p className="lead text-muted">{location.state?.descrizione}</p>


        </Row>
      </Container>
      <br />
      <Container className='album py-5 bg-light'>
        <Container>
          <Row >
          {
                post?.map(card => (<ProductCard
                  key={card._id}
                  id={card._id}
                  nome={card.nome}
                  descrizione={card.descrizione}
                  prezzo={card.prezzo} 
                  proprietario={card.proprietario}/>
                ))
              }
          </Row>
        </Container>

      </Container>
    </Container>
  )
}
