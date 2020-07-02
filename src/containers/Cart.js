import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart } from '../actions/getActions';

class Cart extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='cart_container'>
        <h1>Cart</h1>
        <h2>Items in Cart</h2>
        <span>{this.props.cartProps.cartNumber}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { getCart })(Cart);
