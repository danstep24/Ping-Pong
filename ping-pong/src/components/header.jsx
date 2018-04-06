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
	        {/* Ping Pong animation */}
	        <div className="wrapper">
		  		<div className="left-player"></div>
		  		<div className="ball"></div>
		  		<div className="clear"></div>
		  		<div className="right-player"></div>
	        </div>
	       	{/* Site Title */}
	        <div className="header-title">
				<h1>PING PONG</h1>
	        	<h5>TOURNAMENT GENERATOR</h5>
	    	</div>
	    </div>
    </header>
);

export default Header;