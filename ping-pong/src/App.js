import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Players from "./components/players";
import Footer from "./components/footer";



class App extends Component {
 
  render() {
    return ( 
      <div className="App">
        <Header/>
        <Players/>
        <Footer/>
      </div>
    );
  }
}

export default App;
