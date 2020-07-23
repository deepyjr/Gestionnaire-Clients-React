import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CustomersTable from '../../components/customers/CustomersTable'
import ModalCreateCustomer from './ModalCreateCustomer'

export default function Customers(){
    return(
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <h1>Customers</h1>
                    <ModalCreateCustomer/>
                    <CustomersTable/>
                </Container>
            </React.Fragment>
        </div>
    )
}