import React, { Component }  from "react";

// we use className to add classes for Bootstrap styling
class Players extends Component {
    constructor(props) {
    super(props);
    //set using state to keep track of the players added. 
    this.state = {
      players: [],
      player: "",
      counter: 0,
      shuffled: false,
    }

    this.players = this.players.bind (this);
    this.update = this.update.bind(this);
    this.shuffles = this.shuffles.bind(this);

  }
  
  	players() {
	    // If the text field is empty, the player will not be added.
	    if (this.state.player !== "") {
	      const counter = this.state.counter;
	      const players = this.state.players;
	      players.push(this.state.player);
	      
	      // Sets the text input as blank after add player button is clicked. 
	      this.setState({
	        player: "",
	        counter: counter + 1,
	        shuffled: false,
	      })
	    }
  }

  // Fisher–Yates shuffle algorithm for shuffling the array
	shuffles() {
	    if(this.state.counter % 2 === 0) {
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
		    // Sets the sate of the array with shuffling.
		    this.setState({
		      players: arr,
		      shuffled: true,
		    });
		
		}
		else {
			console.log("error")
		}
	}

  	update(e) {
	    const update = e.target.value;
	    this.setState({
	      player: update,
	    })
	  }

	render() {
 	return (
    
    <players className="">
    	<div className="controls form-group"> 
	    	<h6> Welcome to the Ping Pong tornament genarator. To get started enter the names of the players below. Make sure that they are mutiples of 2. 
	    	Then select mix players. </h6>
	    	<label htmlFor="players">Enter a player</label>
	        <input id="players" value={ this.state.player } onChange={ this.update }/>
	        <button type="button" className="btn btn-success" onClick={this.players}> Add player </button>
	        <button id="sort" type="button" className="btn btn-primary" onClick={ this.shuffles } > Create Teams </button>
	        <h6> Number of players {this.state.counter} </h6>
    	</div>

    	<div>
	    	<ul className="list-group">
	    	{this.state.players.map((item, index) => {
	                    const shuffled = this.state.shuffled;
	                    return (
	                        <div>
	                        { (index % 2 === 0) && (shuffled === true) ? <li className="teams"> Team </li> : null }
	                        <li className="list-group-item list-group-item-action players" key={index}> {item} </li>
	 						 						{console.log(index)}

	 						</div>
	                        );
	                })
	        } 
	        </ul>
        </div>
        <div>
        </div>

    </players>
	)}
};

export default Players;