import React from 'react';
import axios from'axios';
import {AuthContext} from '../../store/AuthContext';
import ModalEditCustomer from '../../views/Customers/ModalEditCustomer'
import {CustomerContext} from '../../store/CustomerContext';


const CustomerDetail = ({id}) => {
    const { authState } = React.useContext(AuthContext);
    const [customer, setCustomer] = React.useState('')
    const [refreshDetails,setRefreshDetails] = React.useState(true);
    const { customerDispatch } = React.useContext(CustomerContext);


    React.useEffect( ()=>{
        const getCustomerDetail = () => {
            axios({
                method:'GET',
                url:'http://emt.arcplex.fr:4000/customers/'+id,
                headers: { 'Authorization' : 'Bearer ' + authState.token}
            })
            .then((res) => {
                customerDispatch({type:'selected',payload:res.data})
                setCustomer(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    
        if(refreshDetails === true){
            getCustomerDetail()
            setRefreshDetails(false)
        }
    
    },[authState.token])
    return (
        <div>

            <h1>Customer Details</h1>
            <h2>{customer.name}</h2>
            <div>{customer.company}</div>
            <div>{customer.city}</div>
            <div>{customer.state}</div>
            <div>{customer.date}</div>

            <ModalEditCustomer/>
            
        </div>
    );
}

export default CustomerDetail;