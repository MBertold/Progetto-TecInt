import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'

export default function OrderButton(props) {
    const [post,setPost] = useState(props.post);
    const [total,setTotal] = useState(props.total);
    const navigate = useNavigate()

const handleButton = (e) => {
    e.preventDefault();
    navigate('/ordine',{
      state : {
        cart : post,
        total : total
      }
    })
    
}


  return (
    <Button onClick={handleButton}>
        Ordina
    </Button>
  )
}
