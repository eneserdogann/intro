import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
// import Temperature from  "./Tempereature";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Routes, Route } from "react-router-dom";
import CartList from "./CartList";
import NotFound from "./NotFound";
import FormDemo from "./FormDemo";

export default class App extends Component {
  state = {
    currentCategory: " ",
    products: [],
    enes: "123",
    categoryName: " ",
    cart: [],
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName, enes: "enes" });
    console.log(category);
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount() {
    this.getProducts();
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart");
  };

  removeFromCart = (product) => {
    let newCartt = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCartt });
    alertify.error(product.productName + " remove from cart");
  };

  render() {
    let infoCategory = {
      title: "Category List",
      title2: this.state.currentCategory,
    };
    let infoProduct = { title: "Product List" };
    let enes = "enes";
    return (
      <div
        style={{
          backgroundColor: "white",
        }}
      >
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
          <Row>
            <Col xs="3">
              <CategoryList
                enes={enes}
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={infoCategory}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <ProductList
                      currentCategory={this.state.currentCategory}
                      products={this.state.products}
                      info={infoProduct}
                      enes={this.state.enes}
                      addToCart={this.addToCart}
                    />
                  }
                />
                <Route
                  exact
                  path="/Cart"
                  element={
                    <CartList
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  }
                />
                <Route element={<NotFound />} />
                <Route path="form1" element={<FormDemo/>} />
              </Routes>
            </Col>
            <Col xs="3">{/* <Temperature/> */}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
