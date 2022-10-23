import React from 'react'
import { useEffect, useState } from 'react';
import authService from './servizi';
import axios from 'axios';

export default function DeleteItem(props) {
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        const user = authService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);
    const handleDelete = (e) => {
        console.warn(props.id)
        e.preventDefault();
        axios.put(`http://localhost:5000/api/cart/delete/${currentUser?.username}`, {
            id: props.id,
        })
    }
    return (
        <button className='btn btn-danger' onClick={handleDelete}>Elimina</button>
    )
}
