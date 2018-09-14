import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";
import { createStyles, withStyles  } from '@material-ui/core/styles';
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
  /*<div>
    <p>item id: <span>{props.id}</span> </p>
    <p>name: <span>{props.name}</span> </p>
    <p>members: <span>{props.members}</span> </p>
    <p>price: <span>{props.price}</span> </p>
    <p>day trend: <span>{props.dayTrend}</span> </p>
    <p>30 day trend: <span>{props.day30}</span> </p>
  </div>*/
  
  
  
  
  
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
          <TableCell><Typography variant="title"> { props.id }</Typography></TableCell>
          <TableCell><Typography variant="title"> { props.name } </Typography></TableCell>
          <TableCell><Typography variant="title"> { props.members } </Typography></TableCell>
          <TableCell><Typography variant="title"> { props.price } </Typography></TableCell>
          <TableCell><Typography variant="title"> { props.dayTrend } </Typography></TableCell>
          <TableCell><Typography variant="title"> { props.day30 } </Typography></TableCell>
      </Table>
    </Paper>
  </div>
  );
}

export default withStyles(styles)(FirstComponent);