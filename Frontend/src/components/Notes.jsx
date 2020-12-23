import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Notes extends Component{

  state = {
    notes : []
  }

  componentDidMount(){
    this.getNotes();
  }
  getNotes = () =>{
    axios.get('http://localhost:3200/notes')
    .then(res => {
      this.setState({
        notes : res.data.notes
      });
    }).catch(err => console.log(err));
  }

  deleteNote = id =>{
    axios.delete('http://localhost:3200/notes/' + id)
    .then(res => {
      this.setState({
        notes : res.state.notes.filter(item => item._id !== id)
      });
    }).catch(err => console.log(err));
  }

  render() {
    const {notes} = this.state; 
      return(
        <div className="container" >
        <div className="row">
          <div className="col-md-10 my-4 mx-auto">
          <table className="table">
  <thead>
    <tr>
      <th scope="col">Titre</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      notes.length > 0 && notes.map( note => (
      <tr key={note._id}>
      <td>{note.title}</td>
      <td>{note.body}</td>
      <td>
        <Link 
        to={`/edit/note/${note._id}`}
        className="btn btn-sm btn-warning mr-1 text-white"
        >Modifier</Link>
        <a 
        onClick = {() => this.deleteNote(note._id)}
        className="btn btn-sm btn-danger text-white">Supprimer</a>
      </td>
      </tr>
      ))
    }
    
  </tbody>
</table>
          </div>
        </div>
      </div>
      )
  }
}