import React from "react";

// we use className to add classes for Bootstrap styling
const Header = () => (
    // header component containing the site tite and branding
    <header>
    	<div className="branding"> 
    		<h6> Site created by Daniel Stephenson </h6>
    	</div>
        {/* Boot strap 3 column layout */}
        <div className="row page-header ">
	        <div class="wrapper">
  <div class="left_wall"></div>
  <div class="ball"></div>
 
  <div class="clear"></div>
	</div>


	        <div className="col-sm racket">
	        	<img  alt="Ping pong racket left" src={require('../images/racket.png')} />
	        </div>
	        <div className="col-sm">
	        	<h1>PING PONG</h1>
	        	<h5> TOURNAMENT GENERATOR</h5>
	        </div>
	        <div className="col-sm racket">
 <div class="right_wall"></div>	        </div>
	    </div>
    </header>
);

export default Header;