import React, { Component } from 'react'
import AddCart from './AddCart';
export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: this.props.nome,
      descrizione: this.props.descrizione,
      prezzo: this.props.prezzo,
      id: this.props.id,
      proprietario : this.props.proprietario
    }
    
  }
  
  render() {
    return (
      <>
        <div className='col'>
          <div className='card' style={{ width: '18rem', textAling: 'center' }}>
            <div className='card-body'>
              <h5 className='card-title'>{this.state.nome}</h5>
              <p className='card-text'>{this.state.descrizione}</p>
              <p className='card-text'>{this.state.prezzo}</p>
              <AddCart
              id = {this.state.id}
              nome ={this.state.nome}
              prezzo={this.state.prezzo}
              proprietario ={this.state.proprietario}
               />
            </div>
          </div>
        </div>


      </>
    )
  }
}
