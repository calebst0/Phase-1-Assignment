import { AppBar, Button, Toolbar } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';


const styles = ({
    button: 
    {
        color: 'secondary',
        margin:10,
        padding: 10,
        size: 'large',
    }
  });
  
const Header: React.StatelessComponent<{}> = () =>{

    return (
    <div>
    <AppBar position="static">
        <Toolbar variant="dense">
            <Link style={{color: "white"}} to="/">
                <Button  variant='contained' style={styles.button}> Home </Button>
            </Link>  
            
            <Link to="/GEPage"> 
                <Button  variant='contained' style={styles.button}> GEPage </Button>
            </Link>

            <Link to="/ItemIDPage">
                <Button variant='contained' style={styles.button}> Item ID</Button>
            </Link>
        </Toolbar>
    </AppBar>
    </div>
    );
}

export default Header;