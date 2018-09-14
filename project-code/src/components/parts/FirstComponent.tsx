import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";
import { createStyles, withStyles  } from '@material-ui/core/styles';
// import * as PropTypes from 'prop-types';
import * as React from "react";

const styles  = (theme:any) => createStyles({
  root: {
    marginLeft: '100px',
    marginRight: '100px',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
   // width: '100%',
    
  },
  table: {
    minWidth: 400,
  },
});

function FirstComponent(props:any) {
  const { classes } = props;
  
  return (
  <div className="centreText">  
    <Paper className={classes.root}>
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
            <TableCell ><Typography variant="title" className="itemID">Item ID</Typography></TableCell>
            <TableCell ><Typography variant="title" className="name">Item Name</Typography></TableCell>
            <TableCell ><Typography variant="title" className="Members">Members</Typography></TableCell>
            <TableCell ><Typography variant="title" className="Price">Price</Typography></TableCell>
            <TableCell ><Typography variant="title" className="dayChange">Day Change</Typography></TableCell>
            <TableCell ><Typography variant="title" className="30Change">30 Day Change</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody/>
          <TableCell><Typography variant="subheading">contents</Typography></TableCell>
          <TableCell/>
          <TableCell/>
          <TableCell/>
          <TableCell/>
      </Table>
    </Paper>
  </div>
  );
}

export default withStyles(styles)(FirstComponent);