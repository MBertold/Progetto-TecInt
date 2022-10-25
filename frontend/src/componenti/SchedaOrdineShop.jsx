import React from 'react'

import Container from 'react-bootstrap/esm/Container'


export default function SchedaOrdineShop(props) {
  

  
  
  return (
    <div className='col'>
      <Container style={{ "display": "flex", "flexDirection": "column", "border": "1px solid black", "margin": "3vw" }}>
        <h3>Ordine del {props.titolo[0] + "/" + props.titolo[1] + "/" + props.titolo[2]}</h3>
        <h4>Cliente : {props.cliente}</h4>
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
