import React from 'react'
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import {AuthContext} from '../../store/AuthContext';
import {useHistory} from 'react-router-dom';



export default function CustomersTable() {
const history = useHistory();
const { authState } = React.useContext(AuthContext);
const [customers,setCustomers] = React.useState([]);
const [refreshTable,setRefreshTable] = React.useState(true);

React.useEffect( ()=>{
    const getCustomers = () => {
        axios({
            method:'GET',
            url:'http://192.168.8.153:4000/customers',
            headers: { 'Authorization' : 'Bearer ' + authState.token}
        })
        .then((res) => {
            console.log('test')
            setCustomers(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    if(refreshTable === true){
        getCustomers()
        setRefreshTable(false)
    }

},[authState.token])

    const columns = [
        {
            name: "_id",
            label: "_id",
            options: {
                display :"excluded",
                filter: false,
                sort: false,
            }
        },
        {
         name: "name",
         label: "Name",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "company",
         label: "Company",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "city",
         label: "City",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "state",
         label: "State",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
        name: "date",
        label: "Date",
        options: {
            filter: true,
            sort: false,
        }
        },
       ];

       const options = {
         selectableRows:"none",
         print:false,
         filter:false,
         viewColumns:false,
         onRowClick: (rowData, rowState) => {
             history.push("/customer/" + rowData[0])
         }
       };
       

    return (
        <div>
        <MUIDataTable
         title={"Customers Table"}
         data={customers}
         columns={columns}
         options={options}
       />
        </div>
       
    );
   }