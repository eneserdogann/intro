import React, { Component } from "react";
import {ListGroup, ListGroupItem} from 'reactstrap'

export default class CategoryList extends Component {
    state = {
          categories: []
        };
    //fetch ile json api'ye ulaşıyorum
    getCategories = ()=>{
      fetch("http://localhost:3000/categories")
      .then(Response => Response.json())
      .then(data => this.setState({categories : data}) )
    }

    componentDidMount(){
      this.getCategories()
    }
    //Bu fonksiyon her component tamamlandıktan sonra "this.getCategoreis" in çalışmasını sağlar.
    //props başka (yani üst hiyerarşideki) componentten veri almayı sağlar.

  render() {
    return (
      <div >
        <h2>{this.props.info.title}</h2>
        <p> </p>
        <ListGroup>
            {this.state.categories.map(category =>(
                <ListGroupItem color="secondary" active = {category.categoryName === this.props.currentCategory?true:false} 
                onClick={()=>this.props.changeCategory(category)} key ={category.Id}>{category.categoryName}</ListGroupItem>
            ))}
        </ListGroup>
        {/* <h4>{this.props.info.title}</h4> */}
        
      </div>
    );
  }
}
