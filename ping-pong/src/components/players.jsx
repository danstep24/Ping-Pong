import React, { Component, Fragment }  from "react";

// we use className to add classes for Bootstrap styling
class Players extends Component {
    constructor(props) {
	    super(props);
	    this.state = {
	      // The players that have been added
	      players: [],
	      // The player being entered in the input field.
	      player: "",
	      // How many players the user has added
	      counter: 0,
	      // If the the user has run the "shuffles function"
	      shuffled: false,
	      // message to be displayed to the user
	      message: "",
    	}

    this.players = this.players.bind (this);
    this.update = this.update.bind(this);
    this.shuffle = this.shuffle.bind(this);
	}
  
  	// updates the player state as the user types. 
  	update(e) {
	    this.setState({
	      player: e.target.value,
	      
	    });
	}

  	players() {
	    // If the text field is empty, the player will not be added.
	    if (this.state.player !== "") {
	      
	    // Pushes the player into the players array
	      this.state.players.push(this.state.player);
	      
	      // After add player button is clicked: Sets text input blank, counter + 1 and undo the shuffle function.
	      this.setState({
	        player: "",
	        counter: this.state.counter + 1,
	        shuffled: false,
	        message: "",
	      });
	    }
  	}

  // Fisher–Yates shuffle algorithm for shuffling the players array
	shuffle() {
		const counter = this.state.counter;
	    // Checks if the number of players is divisible by 2 & is more than 0 
	    if(counter % 2 === 0 && counter > 0) {
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
		    // Sets the sate of the array after shuffling.
		    this.setState({
		      players: arr,
		      shuffled: true,
		      message: "Tournament created, enjoy the game!",
		    });
		
		}
		else {
			// error message if the counter isn't divisible by 2 
			this.setState({
		      message: "Error: You need to enter teams in multiples of two",
		    });
		}
	}
	

	render() {
 		
 	return (
    	<div className="row">
			{/* -------------------- Column for the controls ------------------------------  */}
			<div className="col-sm-6">
			    <div className="controls form-group"> 
			        {/* Input for the player name  */}
			        <input type="text" placeholder="Enter a player name" className="form-control" value={ this.state.player } onChange={ this.update }/>
			        {/* Add player button and number of players counter  */}
			        <p>
			        	<button className="btn btn-success" onClick={ this.players }> Add Player </button>
			         	Players: { this.state.counter } 
			        </p>
			        {/* Create Tournament button*/}
			        <button type="button" className="btn btn-primary" onClick={ this.shuffle } > Create Tournament </button>
			       	{/* Message displayed to users (success/failure)*/}
			        <p className="message"> { this.state.message } </p>
				</div>
			</div>
    
    		{/* ------------ Column for the players names and tournaments ----------------------*/}
	    	<div className="col-sm-6 players">
		    	<ul>
			    	{/* Maps over the players array */}
			    	{this.state.players.map((item, index) => {
		                const shuffled = this.state.shuffled;
		                return (
		                    <Fragment key={"d" + index}>
		                        {/* if the index number is divisible by 2 the Tournament header is created */}
		                        { (index % 2 === 0) && (shuffled === true) ? <li key={"t" + index } className="teams"> Tournament </li> : null }
		                       	{/* if the index number not divisible by 2 the "vs" <li> is inserted */}
		                        { (index % 2 !== 0) && (shuffled === true) ? <li key={"v" + index } className="vs list-group-item"> vs </li> : null }
		                       	{/* displays the players name in a <li>*/}
		                        <li className="list-group-item players" key={index}> {item} </li>
							</Fragment>
		                );
		            })} 
		        </ul>
		    </div>
	    </div>
	)}
};

export default Players;