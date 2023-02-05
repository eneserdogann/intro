import React, { Component } from "react";

export default class FormDemo extends Component {
  state = { userName: "", city: "" };

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]:value})  

    //this.setState({ userName: event.target.value });
  };

  onSubmitHandler = (event) =>{
    event.preventDefault()
    alert(this.state.userName)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h4>User Name</h4>
          <input name = "userName" onChange={this.onChangeHandler} type="text"></input>
          <input type="submit" value="submit"></input>
          <h4>User Name is {this.state.userName}</h4>
   
       
          <h4>City</h4>
          <input name = "city" onChange={this.onChangeHandler} type="text" ></input>
          <input type="submit" value="submit"></input>
          <h4>City is {this.state.city}</h4>
        </form>
      </div>
    );
  }
}
