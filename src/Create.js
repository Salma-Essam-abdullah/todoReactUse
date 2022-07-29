import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router";

class Create extends Component {

  state = {
    title: "",
    completed: "",
    user_id:""
    };

  onTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onCompletedChange= e => {
    this.setState({
      completed: e.target.value
    });
  };
 
  onUserChange= e => {
    this.setState({
      user_id: e.target.value
    });
    console.log(this.state.user_id)
    
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      completed: this.state.completed,
      user_id:this.state.user_id,
    };
    this.setState({
      title: '',
      completed:'',
      user_id:'',
    });

    var user_id = useParams.user_id
   var url="http://localhost:8000/api/todo/create/"+this.state.user_id
    axios
      .post(url, data)
      .then(res => 
       { this.props.getdata()
        console.log(res.data)})
      .catch(err => console.log(err));
   
    
  };
  
  render() {
    
    return (
      <div className="post">
        <form className="post" onSubmit={this.handleSubmit}>
          <input
            placeholder="Title" value={this.state.title}
            onChange={this.onTitleChange} required
          />
          <br/>
          <br/>
          <input
            placeholder="Completed" value={this.state.completed}
            onChange={this.onCompletedChange} required
          />
          <br/>
          <br/>
          <input 
            placeholder="User Id" type="text" name="user_id"  value={this.state.user_id}
          onChange={this.onUserChange} required />
  <br/>
  <br/>
          <button type="submit">Send</button>
      
        </form>
      </div>
    );
  }
}

export default Create;