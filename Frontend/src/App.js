import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Notes from './components/Notes';
import EditNote from './components/EditNote';
import AddNotes from './components/AddNotes';
import Menu from './components/Menu';
import './App.css';

function App() {
  return (
  <BrowserRouter>
  <Menu/>
  <Switch>
    <Route path="/" exact component={Notes}/>
    <Route path="/add/note" exact component={AddNotes}/>
    <Route path="/edit/note/:id" exact component={EditNote}/>
  </Switch>
  </BrowserRouter>
  );
}

export default App;
