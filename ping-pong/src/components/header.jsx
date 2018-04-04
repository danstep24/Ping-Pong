import React from "react";

// we use className to add classes for Bootstrap styling
const Header = () => (
    
    <header className="">
    	<div className="branding"> 
    		<h6> Site created by Daniel Stephson for Developme </h6>
    	</div>
        <div className="row page-header">
	        <div className="col-sm">
	        	<img  alt="" src={require('../images/racket.png')} />
	        </div>
	        <div className="col-sm align-middle">
	        	<h1 className="align-middle">PING PONG</h1>
	        </div>
	        <div className="col-sm">
	        <img alt="" src={require('../images/racket.png')} />
	        </div>
	    </div>
    </header>
);

export default Header;