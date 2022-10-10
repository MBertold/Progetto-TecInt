import axios from 'axios';
import React, { Component } from 'react'
import UpdateModal from './UpdateModal';
import Button from 'react-bootstrap/esm/Button';
export default class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: this.props.nome,
      descrizione: this.props.descrizione,
      prezzo: this.props.prezzo,
      id: this.props.id,
      modalShow : false
    }
  }
 
  setModalShowTrue = () =>{
    this.setState({modalShow : true})
  }
  setModalShowFalse = () =>{
    this.setState({modalShow : false})
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
              <Button variant="primary" onClick={()=> this.setModalShowTrue()}>
                Modifica
              </Button>

              <UpdateModal
                show={this.state.modalShow}
                id={this.state.id}
                nome={this.state.nome}
                descrizione={this.state.descrizione}
                prezzo={this.state.prezzo}
                onHide={() => this.setModalShowFalse()}
              />
            </div>
          </div>
        </div>


      </>
    )
  }
}
