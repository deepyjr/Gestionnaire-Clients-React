import React from 'react'
import Container from '@material-ui/core/Container';
import {useParams} from 'react-router-dom';
import CustomerDetails from '../../components/customers/CustomerDetails'

const SingleCustomer = () => {
    let { id } = useParams();
    return (
        <div>
        <Container maxWidth="lg">
            <CustomerDetails id={id}/>
        </Container>
        </div>
    );
}

export default SingleCustomer;