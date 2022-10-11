import React from 'react'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import authService from './servizi';

export default function AddCart() {
    const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  },[]);

 const handleAdd = (e) =>{
    e.preventDefault();
    currentUser ? (alert("logged")) : (alert("not logged"));
 }


  return (
    <Button onClick={handleAdd}>
        Acquista
    </Button>
  )
}
