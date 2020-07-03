import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import MainBody from './components/MainBody';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Route exact path="/" component={MainBody} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} /> 
      </Router>
      
    </div>
  );
}

export default App;
