import React, {Component} from 'react';
import axios from 'axios';

export default class AddNotes extends Component{

  constructor(props){
      super(props);
      this.state = {
        title : '',
        body :''
      }
  }
  
  handleInputChange = event => {
    this.setState({
      [event.target.name] :event.target.value
    })
  }

  handleFormSubmit = event =>{
    event.preventDefault();
    const note = {
      title : this.state.title,
      body : this.state.body
    }
    axios.post('http://localhost:3200/notes/add',note)
       .then(res => {
           this.setState({
             title : '',
             body : ''
           });
           this.props.history.push('/');
       }).catch(err => console.log(err));
  }

  render() {
      return(
        <div className="container">
<div className="row my-4">
  <div className="col-md-6 mx-auto">
    <div className="card bg-light">
      <div className="card-header">Ajouter une note</div>
      <div className="card-body">
        <form method="post" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label For="">Titre*</label>
            <input 
            onChange={this.handleInputChange }
            value={this.state.title}
            type="text" 
            name="title" id="" 
            required class="form-control" placeholder="Titre"/>
          </div>
          <div className="form-group">
            <label For="">Description</label>
            <textarea 
            onChange={this.handleInputChange }
            value={this.state.body}
            class="form-control" required name="body" id="" rows="3" placeholder="Description"></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Valider</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
      </div>
      )
  }
}