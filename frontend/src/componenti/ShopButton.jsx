import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'


export default function ShopButton(props) {
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
    e.preventDefault();

    navigate('/ristoranti/locale',{
        state: {
          id: props.id,
          nome:props.nome,
          tags:props.tags,
          descrizione:props.descrizione,
          address:props.address,

        }})
    }
  return (
    <Button onClick={handleSubmit}>
        Entra
    </Button>
  )
}
