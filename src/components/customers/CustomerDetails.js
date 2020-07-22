import React from 'react';
import axios from'axios';
import {AuthContext} from '../../store/AuthContext';


const CustomerDetail = ({id}) => {

    const { authState } = React.useContext(AuthContext);
    const [customer, setCustomer] = React.useState('')
    const [refreshDetails,setRefreshDetails] = React.useState(true);

    React.useEffect( ()=>{
        const getCustomerDetail = () => {
            axios({
                method:'GET',
                url:'http://192.168.8.153:4000/customers/'+id,
                headers: { 'Authorization' : 'Bearer ' + authState.token}
            })
            .then((res) => {
                console.log('test')
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
            <div>{customer.id}</div>
        </div>
    );
}

export default CustomerDetail;