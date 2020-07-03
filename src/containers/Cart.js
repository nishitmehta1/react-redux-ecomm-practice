import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart } from '../actions/getActions';

class Cart extends Component {
  render() {
    console.log(this.props);
    const products_in_cart = this.props.cartProps.products_in_cart.map(
      (product, i) => <h3 className='product_name_in_cart'>{product}</h3>
    );
    return (
      <div className='cart_container'>
        <h1>Cart</h1>
        <h2>Items in Cart</h2>
        <span>{this.props.cartProps.cartNumber}</span>
        <div className='products_in_cart'> {products_in_cart} </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { getCart })(Cart);
