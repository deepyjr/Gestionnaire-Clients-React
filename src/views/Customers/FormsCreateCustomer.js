import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {AuthContext} from '../../store/AuthContext';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



export default function BasicTextFields() {
  const { authState } = React.useContext(AuthContext);
  const classes = useStyles();
  const [customer, setCustomer ] = React.useState({
    name:'',
    company:'',
    city:''
  });
  const [submit, setSubmit ] = React.useState(false);

  React.useEffect( ()=>{
    const loginUser = () => {
        axios({
            method:'post',
            url:'http://emt.arcplex.fr:4000/customers/create',
            headers: { 'Authorization' : 'Bearer ' + authState.token},
            data:customer
        })
        .then((res) => {
            console.log(res, 'test')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    if(submit){
        loginUser()
        setSubmit(false)
    }
}, [submit, customer])

  return (
    <div>
    <form className={classes.root} noValidate autoComplete="off" onSubmit={ e => {
      e.preventDefault();
      setSubmit(true);
    }}>

      <TextField id="name" label="Name" variant="outlined" 
      onChange={e => setCustomer({...customer, name: e.target.value})}
      />
      <TextField id="company" label="Company" variant="outlined" 
      onChange={e => setCustomer({...customer, company: e.target.value})}
      />
      <TextField id="city" label="City" variant="outlined"
      onChange={e => setCustomer({...customer, city: e.target.value})} 
      />

      <Button variant="contained" color="primary" type="submit">
        S'inscrire
      </Button>
      </form>
    </div>

  );
}