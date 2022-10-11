import React, { Component } from 'react';
import ShopButton from './ShopButton';
class ShopCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: this.props.nome,
      tags: this.props.tags,
      address: this.props.address,
      descrizione: this.props.descrizione,
      id: this.props.id
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
              <ShopButton
              id={this.state.id}
              nome={this.state.nome}
              tags={this.state.tags}
              address={this.state.address}
              descrizione={this.state.descrizione}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopCard;
