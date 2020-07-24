import React from 'react';
import axios from'axios';
import {AuthContext} from '../../store/AuthContext';
import ModalEditCustomer from '../../views/Customers/ModalEditCustomer'
import {CustomerContext} from '../../store/CustomerContext';


const CustomerDetail = ({id}) => {
    const { authState } = React.useContext(AuthContext);
    const [refreshDetails,setRefreshDetails] = React.useState(true);
    const { customerState } = React.useContext(CustomerContext);

    React.useEffect( ()=>{
        const getCustomerDetail = () => {
            axios({
                method:'GET',
                url:'http://emt.arcplex.fr:4000/customers/'+id,
                headers: { 'Authorization' : 'Bearer ' + authState.token}
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    
        if(refreshDetails === true){
            getCustomerDetail()
            setRefreshDetails(false)
        }
    
    },[authState.token]);

    

    return (
        <div>

            <h1>Customer Details</h1>
            <h2>{customerState.selectedCustomer.name}</h2>
            <div>{customerState.selectedCustomer.company}</div>
            <div>{customerState.selectedCustomer.city}</div>
            <div>{customerState.selectedCustomer.state}</div>
            <div>{customerState.selectedCustomer.date}</div>

            <ModalEditCustomer/>
            
        </div>
    );
}

export default CustomerDetail;