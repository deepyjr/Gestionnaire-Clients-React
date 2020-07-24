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
import ModalDeleteCustomer from './ModalDeleteCustomer';

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
      };
    }
    
    const useStyles = makeStyles((theme) => ({
      textField: {
        float: 'center',
        paddingBottom: 15,
        width: '100%',
        clear: 'both',
      },
      paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 2, 3),
        outline: 'none',
      },
      button: {
        float: 'left',
        width: '100%',
      },
      title: {
        textAlign: "left",
        float: "left",
      }
    }));

export default function CustomerEdit(props) {
    const classes = useStyles();

    const { authState } = React.useContext(AuthContext);
    const { customerState } = React.useContext(CustomerContext);
    
    const [customer, setCustomer ] = React.useState('');
    const [submit, setSubmit ] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    // console.log(customer);
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    React.useEffect(() => {
      setCustomer(
      customerState.selectedCustomer
      )
      }, [customerState])

    React.useEffect( ()=>{
      const updateUser = () => {
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
          updateUser()
          setSubmit(false)
          handleClose()
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
      <h2 id="simple-modal-title" className={classes.title}>Edit Customer</h2>
      <ModalDeleteCustomer/>

      <form className={classes.root} noValidate autoComplete="off" onSubmit={ e => {
          e.preventDefault();
          setSubmit(true);
      }}>
    
        <TextField id="name" label="Name" className={classes.textField} variant="outlined" value={customer.name || ''}
        onChange={e => setCustomer({...customer, name: e.target.value})}
        />
        <TextField id="company" label="Company" className={classes.textField} variant="outlined" value={customer.company || ''}
        onChange={e => setCustomer({...customer, company: e.target.value})}
        />
        <TextField id="city" label="City" className={classes.textField} variant="outlined" value={customer.city || ''}
        onChange={e => setCustomer({...customer, city: e.target.value})} 
        />
        <TextField id="state" label="state" className={classes.textField} variant="outlined" value={customer.state || ''}
        onChange={e => setCustomer({...customer, state: e.target.value})} 
        />
        <TextField id="date" label="date" className={classes.textField} variant="outlined" value={customer.date || ''}
        onChange={e => setCustomer({...customer, date: e.target.value})} 
        />
        
        <Button className={classes.button} variant="contained" color="primary" type="submit">
          Edit
        </Button>
      </form>
      
    </div>
    </Modal>
  </div>
);
}