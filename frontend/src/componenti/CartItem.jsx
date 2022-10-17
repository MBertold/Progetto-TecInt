import React, { Component } from 'react';
import DeleteItem from './DeleteItem';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: this.props.nome,
            prezzo: this.props.prezzo,
            id: this.props.id,
        }
    }
    render() {
        return (
            <div className='container' style={{display:'flex',flexDirection:'column'}}>
                <div className='container'>
                    <h5>{this.state.nome}</h5>
                    <p>{this.state.prezzo}</p>
                </div>
                <DeleteItem
                id = {this.state.id}
                />
            </div>
        );
    }
}

export default CartItem;
