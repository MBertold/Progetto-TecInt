import React from 'react'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import authService from './servizi';
import axios from 'axios';
export default function AddCart(props) {
    const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  },[]);

 const handleAdd = (e) =>{
    e.preventDefault();
    console.warn(props.proprietario)
    currentUser ? (
      
      axios.post(`http://localhost:5000/api/cart/add/${currentUser.username}`,{
        id : props.id,
        proprietario: props.proprietario
      })
      
      ) : (alert("not logged"));
 }


  return (
    <Button onClick={handleAdd}>
        Acquista
    </Button>
  )
}
