import axios from 'axios';
import React, { Component } from 'react'

export default class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: this.props.nome,
      descrizione: this.props.descrizione,
      prezzo: this.props.prezzo,
      id : this.props.id
    }
  }
  handleNome = (e) => {
    this.setState({ nome: e.target.value })
  }
  handleDescrizione = (e) => {
    this.setState({ descrizione: e.target.value })
  }
  handlePrezzo = (e) => {
    this.setState({ prezzo: e.target.value })
  }

  handleSubmitPut = event => {
    event.preventDefault();


    axios.put(`http://localhost:5000/api/item/put/${this.props.id}`, {

    })
  }
  handleSubmitDelete = event => {
    event.preventDefault();


    axios.delete(`http://localhost:5000/api/item/delete/${this.props.id}`)
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
              <form onSubmit={this.handleSubmitDelete}>
                <button className='btn btn-outline-danger' >Elimina</button>
              </form>
              <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Modifica</button>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>


      </>
    )
  }
}
