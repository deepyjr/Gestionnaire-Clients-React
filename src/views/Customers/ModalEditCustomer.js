import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FormsCreateCustomer from './FormsCreateCustomer';
import Button from '@material-ui/core/Button';
import Customers from './Customers';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import {AuthContext} from '../../store/AuthContext';
import {CustomerContext} from '../../store/CustomerContext';


function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
      };
    }
    
    const useStyles = makeStyles((theme) => ({
      paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }));

export default function CustomerEdit(props) {
    const classes = useStyles();

    const { authState } = React.useContext(AuthContext);
    const { customerState } = React.useContext(CustomerContext);
    
    const [customer, setCustomer ] = React.useState(customerState.selectedCustomer);
    const [submit, setSubmit ] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    console.log(customer)
    React.useEffect( ()=>{
      const loginUser = () => {
          axios({
              method:'post',
              url:'http://emt.arcplex.fr:4000/customers/update/'+ customer._id,
              headers: { 'Authorization' : 'Bearer ' + authState.token},
              data:customer
          })
          .then((res) => {
              console.log(res, 'test')
          })
          .catch((err)=>{
              console.log(err, props.id)
          })
      }
  
      if(submit){
          loginUser()
          setSubmit(false)
      }
  }, [submit, customer])
return (
    <div>
      <Button variant="contained" color="primary" type="button" onClick={handleOpen}>
        Edit Customer
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Edit</h2>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={ e => {
                e.preventDefault();
                setSubmit(true);
            }}>

      <TextField id="name" label="Name" variant="outlined" value={customer.name || ''}
      onChange={e => setCustomer({...customer, name: e.target.value})}
      />
      <TextField id="company" label="Company" variant="outlined" value={customer.company || ''}
      onChange={e => setCustomer({...customer, company: e.target.value})}
      />
      <TextField id="city" label="City" variant="outlined" value={customer.city || ''}
      onChange={e => setCustomer({...customer, city: e.target.value})} 
      />
      <TextField id="state" label="state" variant="outlined" value={customer.state || ''}
      onChange={e => setCustomer({...customer, state: e.target.value})} 
      />
      <TextField id="date" label="date" variant="outlined" value={customer.date || ''}
      onChange={e => setCustomer({...customer, date: e.target.value})} 
      />
      
      <Button variant="contained" color="primary" type="submit">
        Edit
      </Button>
      </form>
        
      </div>
      </Modal>
    </div>
  );
}