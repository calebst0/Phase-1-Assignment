import * as React from "react";

const Input = (props:any) => (

	<form onSubmit={props.getItem}>
		<input type="integer" name="itemname" placeholder="Item" />
		<div className='centreText'><button>Find Item</button></div>
	</form>

);

export default Input;