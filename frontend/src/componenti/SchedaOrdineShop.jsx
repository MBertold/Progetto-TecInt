import React from 'react'
export default function SchedaOrdineShop(props) {
  return (
    <div className='col'>
      <div className='card' style={{ width: '18rem', textAling: 'center',margin:'5px' }}>
        <div className='card-body'>
          <h4 className='card-title'>Ordine del {props.titolo[0] + "/" + props.titolo[1] + "/" + props.titolo[2]}</h4>
          <h5 className='card-title'>Cliente : {props.cliente}</h5>
          <h5 className='card-title'>Indirizzo : {props.indirizzo}</h5>
          {
            props.items.map(card => (
              <>
              <p className='card-text'>{card.nome}</p>
              <p className='card-text'>Prezzo:{card.prezzo}</p>
              <br/>
              </>
            ))
          }
        </div>
      </div>
    </div>
  )
}
