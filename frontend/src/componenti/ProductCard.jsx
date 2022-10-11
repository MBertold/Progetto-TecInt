import axios from 'axios';
import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button';
export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: this.props.nome,
      descrizione: this.props.descrizione,
      prezzo: this.props.prezzo,
      id: this.props.id,
    }
  }
 


  handleSubmitDelete = event => {
    event.preventDefault();
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
              <Button variant="primary">
                Acquista
              </Button>
            </div>
          </div>
        </div>


      </>
    )
  }
}
