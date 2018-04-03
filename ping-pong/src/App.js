import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    //set using state to keep track of the players added. 
    this.state = {
      players: [],
      player: "",
      counter: 0,
    }

    this.players = this.players.bind (this);
    this.update = this.update.bind(this);
    this.shuffles = this.shuffles.bind(this);

  }
  
  players() {
    // If the text field is empty, the player will not be added.
    if (this.state.player !== "") {
      
      const players = this.state.players;
      players.push(this.state.player);
      
      // Sets the text input as blank after add player button is clicked. 
      this.setState({
        player: "",
      })
    }

    
  }

  shuffles() {
    const arr = this.state.players;
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    } 
    this.setState({
      players: arr,
    });

}


  update(e) {
    const update = e.target.value;
    this.setState({
      player: update,
    })
  }

  render() {
    return (
      
      <div className="App">
        <h1> PING PONG </h1>
        <label htmlFor="players">Enter a player</label>
        <input id="players" value={ this.state.player } onChange={ this.update }/>
        <button type="button" onClick={ this.players }> Add player </button>
        <button id="sort" type="button" onClick={ this.shuffles } > Sort player </button>

      
        {this.state.players.map((item, index) => {
                    return (
                        <li key={item.toString()}> {item} </li>
                        );
                })
                } 

      </div>
    );
  }
}

export default App;
