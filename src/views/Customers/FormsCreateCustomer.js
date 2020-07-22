import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <TextField id="name" label="name" variant="outlined" />
      <TextField id="Company" label="Company" variant="outlined" />
      <TextField id="City" label="City" variant="outlined" />
      <Button variant="contained" color="primary">
        Primary
      </Button>


    </form>
  );
}