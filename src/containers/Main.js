import React, { Component } from 'react';
import ProductsDisplay from '../components/ProductsDisplay';
import Cart from './Cart';
import { connect } from 'react-redux';
import { addCart } from '../actions/addAction';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, addCart } = this.props;

    const dataToDisplay = data.map((product, i) => (
      <div className='product' key={i}>
        <img src={product.product_image} alt='Product Img' />
        <h3 className='product_title'>{product.product_name}</h3>
        <button onClick={() => addCart(product.product_name)}>
          Add to Cart
        </button>
      </div>
    ));

    console.log(this.props);
    return (
      <div>
        <div className='products_and_cart_container'>
          <ProductsDisplay dataToDisplay={dataToDisplay} />
          <Cart />
        </div>
      </div>
    );
  }
}

export default connect(null, { addCart })(Main);
