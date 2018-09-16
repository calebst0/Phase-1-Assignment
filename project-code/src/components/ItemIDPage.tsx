import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";
import { createStyles, withStyles  } from '@material-ui/core/styles';
import * as React from "react";

const styles  = (theme:any) => createStyles({
  root: {
    marginLeft:'500px',
    marginRight: '400px',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
   // width: '100%',
  },
  table: {
    minWidth: 400,
  },
});

function IDTable(props:any) {

  const { classes } = props;

  return (
  <div className="centreText">  
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell ><Typography variant="title" className="itemID">Item ID</Typography></TableCell>
            <TableCell ><Typography variant="title" className="name">Item Name</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell><Typography variant="title"> 4151 </Typography></TableCell>
          <TableCell><Typography variant="title"> Abyssal Whip</Typography></TableCell>
        </TableBody>
        <TableBody>
          <TableCell><Typography variant="title"> 10344 </Typography></TableCell>
          <TableCell><Typography variant="title"> 3rd Age Amulet</Typography></TableCell>
        </TableBody>
        <TableBody>
          <TableCell><Typography variant="title"> 13263 </Typography></TableCell>
          <TableCell><Typography variant="title"> Abyssal Bludgeon</Typography></TableCell>
        </TableBody>
        <TableBody>
          <TableCell><Typography variant="title"> 19553</Typography></TableCell>
          <TableCell><Typography variant="title"> Amulet of Torture </Typography></TableCell>
        </TableBody>
        <TableBody>
          <TableCell><Typography variant="title"> 2503 </Typography></TableCell>
          <TableCell><Typography variant="title"> Black D'hide Body </Typography></TableCell>
        </TableBody>
        <TableBody>
          <TableCell><Typography variant="title"> 11840 </Typography></TableCell>
          <TableCell><Typography variant="title"> Dragon Boots </Typography></TableCell>
        </TableBody>
        <TableBody>
          <TableCell><Typography variant="title"> 21892 </Typography></TableCell>
          <TableCell><Typography variant="title"> Dragon PlateBody </Typography></TableCell>
        </TableBody>
        <TableBody>
          <TableCell><Typography variant="title"> 12817 </Typography></TableCell>
          <TableCell><Typography variant="title"> Elysian Spirit Shield </Typography></TableCell>
        </TableBody>
        <TableBody>
          <TableCell><Typography variant="title"> 22209 </Typography></TableCell>
          <TableCell><Typography variant="title"> Extended Super Antifire(4) </Typography></TableCell>
        </TableBody>
      </Table>
    </Paper>
    <div>Item ID's to query exchange with</div>
  </div>
  );
}

export default withStyles(styles)(IDTable);