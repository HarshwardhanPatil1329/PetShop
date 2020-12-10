import { Switch, Route } from "react-router-dom";
import React, { Component, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import About from "./components/AboutUs";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Food from "./components/food";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/food" component={Food} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
