import React, {Component} from 'react';
import axios from 'axios';

export default class EditNote extends Component{

  constructor(props){
      super(props);
      this.state = {
          note : {
            title : '',
            body :''
          }
      }
  }
  
  componentDidMount(){
    axios.get(`http://localhost:3200/notes/${this.props.match.params.id}`)
    .then(res =>{
      console.log(res.data)
      this.setState({
            note : res.data.note
      })
    }).catch(err => console.log(err));
  }

  handleTitleInputChange = event => {
    let oldNote = this.state.note;
    oldNote.title = event.target.value;
    this.setState({
      note : oldNote
    })
  }

  handleBodyInputChange = event => {
    let oldNote = this.state.note ;
    oldNote.body = event.target.value;
    this.setState({
      note : oldNote
    })
  }

  handleFormSubmit = event =>{
    event.preventDefault();
    const note = {
      title : this.state.note.title,
      body : this.state.note.body
    }
    axios.put(`http://localhost:3200/notes/${this.props.match.params.id}`,note)
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
      <div className="card-header">Modifier une note</div>
      <div className="card-body">
        <form method="post" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="">Titre*</label>
            <input 
            onChange={this.handleTitleInputChange }
            value={this.state.note.title}
            type="text" 
            name="title" id="" 
            required className="form-control" placeholder="Titre"/>
          </div>
          <div className="form-group">
            <label htmlFor="">Description</label>
            <textarea 
            onChange={this.handleBodyInputChange }
            value={this.state.note.body}
            className="form-control" required name="body" id="" rows="3" placeholder="Description"></textarea>
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