import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'
import { Link } from "react-router-dom";


export default class CartList extends Component {
  
  renderCart(){
      return(
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Category Id</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(cartItem =>(
              <tr key={cartItem.product.id}>
                <td>{cartItem.product.id}</td>
                <td>{cartItem.product.categoryId}</td>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.unitsInStock}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button onClick = {()=> this.props.removeFromCart(cartItem.product)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        )
       
  }
  
  
  
  render() {
    return (
      <div>{this.renderCart()}
      <Button color="white" >
      <Link to="/">Geri dön</Link>
     </Button>
  
      </div>
    )
  }
}
