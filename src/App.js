import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import MainBody from './components/MainBody';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <Router>
        <Route exact path="/about" component />
        <Route exact path="/projects" component />
        <Route exact path="/contact" component />
      </Router>

      <Header/>
      <MainBody/>
    </div>
  );
}

export default App;
