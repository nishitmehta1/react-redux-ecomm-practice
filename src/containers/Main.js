import React, { Component } from 'react';
import ProductsDisplay from '../components/ProductsDisplay';
import Cart from './Cart';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;

    const dataToDisplay = data.map((product) => (
      <div className='product'>
        <img src={product.product_image} alt='Product Img' />
        <h3 className='product_title'>{product.product_name}</h3>
        <button>Add to Cart</button>
      </div>
    ));

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

export default Main;
