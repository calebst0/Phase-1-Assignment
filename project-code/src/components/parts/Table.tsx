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

function ItemTable(props:any) {

  const { classes } = props;

  return (
    <div className="centreText">  
    <Paper className={classes.root}>
      <Table className={classes.table}>
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
        <TableBody>
            {props.rows.map((row:any) => {
              return (
                <TableRow key={row.id}>
                  <TableCell><Typography variant="title"> { row.id }</Typography></TableCell>
                  <TableCell><Typography variant="title"> { row.name } </Typography></TableCell>
                  <TableCell><Typography variant="title"> { row.members } </Typography></TableCell>
                  <TableCell><Typography variant="title"> { row.price } </Typography></TableCell>
                  <TableCell><Typography variant="title"> { row.daytrend } </Typography></TableCell>
                  <TableCell><Typography variant="title"> { row.day30 } </Typography></TableCell>
                </TableRow>
              );
            })}     
        </TableBody>
      </Table>
    </Paper>
    <div>{ props.error }</div>
  </div>
  );
}

export default withStyles(styles)(ItemTable);