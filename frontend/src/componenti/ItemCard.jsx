
import React, { Component } from 'react'

export default class ItemCard extends Component {
  render() {
    return (
      <div className='col'>
        <div className='card' style={{width:'18rem',textAling:'center'}}>
          <div className='card-body'>
            <h5 className='card-title'>{this.props.nome}</h5>
            <p className='card-text'>{this.props.descrizione}</p>
            <p className='card-text'>{this.props.prezzo}</p>
            <button className='btn btn-outline-danger'>Elimina</button>
          </div>
        </div>
      </div>
    )
  }
}
