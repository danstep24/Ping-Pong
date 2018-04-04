import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Players from "./components/players";


class App extends Component {
 
  render() {
    return (
      
      <div className="App">
        <Header/>
        <Players/>

        
      </div>
    );
  }
}

export default App;
