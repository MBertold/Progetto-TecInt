import React, { useEffect } from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import axios from 'axios';

export default function SchedaOrdine(props) {
  
  const [proprietario, setProprietario] = useState()
  useEffect(() => {
    axios.get("http://localhost:5000/api/shop/getname", { params: { id: props?.proprietario } })
      .then((res) => {
        setProprietario(res.data)

      })
  },[])

  return (
    <div className='col'>
      <Container style={{ "display": "flex", "flexDirection": "column", "border": "1px solid black", "margin": "3vw" }}>
        <h3>Ordine del {props.titolo[0] + "/" + props.titolo[1] + "/" + props.titolo[2]}</h3>
        <h4>{proprietario}</h4>
        {
          props.items.map(card => (
            <Container>
              <h4>{card.nome}</h4>
              <span>{card.prezzo}</span>
            </Container>
          ))
        }
      </Container>
    </div>
  )
}
