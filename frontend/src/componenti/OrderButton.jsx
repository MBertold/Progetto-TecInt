import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'

export default function OrderButton(props) {
    const navigate = useNavigate()

const handleButton = (e) => {
    e.preventDefault();
    if (props.total !== "0.00"){
      navigate('/ordine',{
        state : {
          cart : props.post,
          total : props.total
        }
      })
    } else {
      alert('carrello vuoto')
    }
    
    
}


  return (
    <Button onClick={handleButton}>
        Ordina
    </Button>
  )
}
