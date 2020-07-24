import React from 'react'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
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
    padding: theme.spacing(2, 2, 3),
    outline: 'none',
    },

    deleteButton: {
        float: 'right',
      },

    title: {
        textAlign: 'center',
    }

}));

export default function CustomerEdit(props) {
    const classes = useStyles();

    const { authState } = React.useContext(AuthContext);
    const { customerState } = React.useContext(CustomerContext);
    
    const [customer, setCustomer ] = React.useState(customerState.selectedCustomer);
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [redirect, setRedirect] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const deleteUser = () => {
        axios({
            method:'get',
            url:'http://emt.arcplex.fr:4000/customers/delete/'+ customer._id,
            headers: { 'Authorization' : 'Bearer ' + authState.token},
        })
        .then((res) => {
            console.log(res);
            handleClose();
            setRedirect(true);
        })
        .catch((err)=>{
            console.log(err, props.id)
        })
    }
    
    if(redirect) {
        return <Redirect to='/customers'/>
    }

return (
    <div>
        <Button variant="contained" color="primary" type="button" className={classes.deleteButton} onClick={handleOpen}>
            Delete Profile
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
        <div style={modalStyle} className={classes.paper}>
        <h3 id="simple-modal-title" className={classes.title}>Do you want to delete this profile ?</h3>
        <Button className={classes.button} variant="contained" color="primary" onClick={deleteUser} style={{float: "left"}}>
          Yes
        </Button>
        <Button className={classes.button} variant="contained" color="primary" onClick={handleClose} style={{float: "right"}}>
          No
        </Button>
    </div>
    </Modal>
  </div>
);
}