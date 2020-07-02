import React, { Component } from 'react';

class ProductsDisplay extends Component {
  render() {
    const { dataToDisplay } = this.props;
    return <div className='products_container'>{dataToDisplay}</div>;
  }
}

export default ProductsDisplay;
