// import { Button, FormControl, TextField, Typography, } from '@material-ui/core';
import * as React from "react";

const Input = (props:any) => 
(

	<form onSubmit={props.getItem}>
		<div margin-top={10000}>Enter an Item ID to retrieve Market Information refer to: http://oldschoolrunescape.wikia.com/wiki/Category:Grand_Exchange</div>
		<input type="integer" name="itemname" placeholder="Enter Item ID" />
		<div className='centreText'><button>Find Item</button></div>
	</form>
	
);

export default Input;