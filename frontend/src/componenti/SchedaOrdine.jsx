import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';

export default function SchedaOrdine(props) {

  const [proprietario, setProprietario] = useState()
  useEffect(() => {
    axios.get("http://localhost:5000/api/shop/getname", { params: { id: props?.proprietario } })
      .then((res) => {
        setProprietario(res.data)

      })

  }, [props?.proprietario])

  return (
    <div className='col'>
      <div className='card' style={{ width: '18rem', textAling: 'center' ,margin:'5px'}}>
        <div className='card-body'>
          <h4 className='card-title'>Ordine del {props.titolo[0] + "/" + props.titolo[1] + "/" + props.titolo[2]}</h4>
          <h5 className='card-title'>Proprietario : {proprietario?.name}</h5>
          {
            props.items.map(card => (
              <>
                <p className='card-text'>{card.nome}</p>
                <p className='card-text'>Prezzo:{card.prezzo}</p>
                <br/>
              </>))
          }
        </div>
      </div>
    </div>
  )
}
