import React from "react";

const player = ({ players }) => (
	
	<player>
	{players.map((item, index) => {
        return (
            <li key={index}> {item} </li>
            );
        })
    }
	</player>

);

export default player; 
