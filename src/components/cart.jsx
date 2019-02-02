import React, { Component } from 'react';
class Cart extends Component {
    render() { 
        return ( <h1>You total items count {this.props.totalCartsCount}</h1> );
    }
}
 
export default Cart;