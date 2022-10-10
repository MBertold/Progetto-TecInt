import React, { Component } from 'react';

class ShopCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nome: this.props.nome,
          tags: this.props.tags,
          address:this.props.address,
          descrizione: this.props.descrizione,
            id:this.props.id
        }
      }
    render() {
        return (
            <div className='col'>
          <div className='card' style={{ width: '18rem', textAling: 'center' }}>
            <div className='card-body'>
              <h5 className='card-title'>{this.state.nome}</h5>
              <p className='card-text'>{this.state.tags}</p>
              <p className='card-text'>{this.state.address}</p>
              <p className='card-text'>{this.state.descrizione}</p>
              <form>
                <button className='btn btn-primary' >Entra</button>
              </form>
            </div>
          </div>
        </div>
        );
    }
}

export default ShopCard;
