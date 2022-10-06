
import axios from 'axios';
import React, { Component } from 'react'

export default class ItemCard extends Component {
  



  handleSubmit = event => {
    event.preventDefault();


    axios.delete(`http://localhost:5000/api/item/delete/${this.props.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {

    return (
      <div className='col'>
        <div className='card' style={{ width: '18rem', textAling: 'center' }}>
          <div className='card-body'>
            <h5 className='card-title'>{this.props.nome}</h5>
            <p className='card-text'>{this.props.descrizione}</p>
            <p className='card-text'>{this.props.prezzo}</p>
            <form onSubmit={this.handleSubmit}>
              <button className='btn btn-outline-danger' >Elimina</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
