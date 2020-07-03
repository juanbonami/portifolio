import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import MainBody from './components/MainBody';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">

      <Router>
        <Header/>
        <Route exact path="/about" component={MainBody} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Router>

      <Header/>
      <MainBody/>
    </div>
  );
}

export default App;
