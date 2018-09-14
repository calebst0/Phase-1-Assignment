import { AppBar, Button, Toolbar  } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';


const styles = ({
    button: 
    {
        color: 'primary',
        fullWidth: 'false',
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
            <Link style={{color: "white"}} to="/"><Button style={styles.button} variant='contained'> Home </Button></Link>  
            <Link to="/GEPage"> <Button style={styles.button} variant='contained'> GEPage </Button> </Link>
            <Link to="/SecondComponent"> <Button style={styles.button} variant='contained'> Hiscores </Button> </Link>
        </Toolbar>
    </AppBar>
    </div>
    );
}

export default Header;