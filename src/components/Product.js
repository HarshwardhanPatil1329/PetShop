import React, { Component } from "react";
import styled from "styled-components";
import Swal from "sweetalert2"; 
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";


class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    const { removeTour } = this.props;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
        <span
                   className="close-btn"
                   onClick={() => {
                    removeTour(id); }}
                  >
                      {/* <i className="fas fa-window-close" /> */}
                  </span>
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="card-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                    // alert("Added to cart");
                    Swal.fire('Added to Cart')
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-8" disabled>
                      {" "}
                      in cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  .img{
    
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
    
  }
  .card-img-top {
     transition: all 1s linear;
     width:150px;
    height:100px;
    // padding:20px;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
    width:150px;
    height:100px;
  }
  .card-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: (--mainBlue);
    font-size: 1.42rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .card-btn {
    transform: translate(0, 0);
  }
  .card-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .close-btn {
   
    position: absolute;
    top: 5%;
    right: 5%;
    font-size:30px;
    
    color: green;
    
  }
`;
export default Product;
