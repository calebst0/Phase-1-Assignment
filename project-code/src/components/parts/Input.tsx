// import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
// import * as PropTypes from 'prop-types';
import * as React from 'react';

class ComposedTextField extends React.Component {
  public state = {
      name: '',
  };

  public handleChange = (event:any) => {
    this.setState({ input: event.target.value });
  };

  public render() {
    
    return (
      <form >
            <TextField
            id="full-width"
            label="Item"
            name="input"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Item:"
            helperText="Enter a GE Item"
            margin="normal"
            value={this.state.name}
            onChange={this.getItem}
            />
            
      </form>
      
    );
  }
}

export default ComposedTextField;