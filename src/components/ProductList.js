import React, { Component, Fragment } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import { storeProducts } from "../data";

class ProductList extends Component {
  state = {
    products: storeProducts
  };
  removeTour = id => {
    console.log(id);

    const { products } = this.state;
    const sortedTours = products.filter(product => product.id !== id);
    this.setState({
      product: sortedTours
    });
  };
  render() {
    
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="pets" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} removeTour={this.removeTour} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ProductList;
