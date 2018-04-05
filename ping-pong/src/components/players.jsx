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
	      message: "",
    }

    this.players = this.players.bind (this);
    this.update = this.update.bind(this);
    this.shuffles = this.shuffles.bind(this);

	}
  
  	players() {
	    // If the text field is empty, the player will not be added.
	    if (this.state.player !== "") {
	      
	    // Pushes the player into the players array
	      this.state.players.push(this.state.player);
	      
	      // After add player button is clicked: Sets text input blank, counter + 1 and undo the shuffles function.
	      this.setState({
	        player: "",
	        counter: this.state.counter + 1,
	        shuffled: false,
	        message: "",
	      })
	    }
  	}

  // Fisher–Yates shuffle algorithm for shuffling the array
	shuffles() {
	    
		const counter = this.state.counter;
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
		    // Sets the sate of the array with shuffling.
		    this.setState({
		      players: arr,
		      shuffled: true,
		      message: "Tournament created, enjoy the game!",
		    });
		
		}
		else {
			// error message if the counter isnt divisible by 2
			this.setState({
		      message: "Error: You need to enter teams in multiples of two",
		    });
		}
	}
	// updates the player state as the user types. 
  	update(e) {
	    this.setState({
	      player: e.target.value,
	      
	    })
	}

	render() {
 	return (
    	<div className="row">
			
			{/* Col for the controls  */}
			<div className="col-sm-6">
			    <div className="controls form-group"> 
			        <input id="myInput "type="text" placeholder="Enter a player name" className="form-control" value={ this.state.player } onChange={ this.update }/>
			        <p>
			        	<button id="submit" type="submit" className="btn btn-success" onClick={this.players}> Add Player </button>
			         	Players: { this.state.counter } 
			        </p>
			        <button type="button" className="btn btn-primary" onClick={ this.shuffles } > Create Tournament </button>
			        <p> {this.state.message} </p>
				</div>
			</div>
    
    		{/* Col for the players names and teams */}
	    	<div className="col-sm-6 players">
		    	<ul>
			    	{/* Maps over the players array */}
			    	{this.state.players.map((item, index) => {
		                const shuffled = this.state.shuffled;
		                return (
		                    <div key={"d" + index}>
		                        {/* if the index number is divisible by 2 the Tournament header is created */}
		                        { (index % 2 === 0) && (shuffled === true) ? <li key={"t" + index } className="teams"> Tournament </li> : null }
		                       	{/* if the index number not divisible by 2 the "vs" is inserted */}
		                        { (index % 2 !== 0) && (shuffled === true) ? <li key={"v" + index } className="vs list-group-item"> vs </li> : null }
		                        <li className="list-group-item players" key={index} value="hello"> {item} </li>
							</div>
		                );
		            })} 
		        </ul>
		    </div>
	    </div>
	)}
};

export default Players;