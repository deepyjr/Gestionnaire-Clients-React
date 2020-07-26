import React from 'react'
import axios from 'axios'
import {AuthContext} from '../store/AuthContext';
import { BrowserRouter } from "react-router-dom";
import Layout from '../layout/Layout';
import Login from '../views/Login'
import LoadingPage from '../Loading/loading'
import '../Loading/loading.gif'


export default function CheckConnexion()
{

    const { authState } = React.useContext(AuthContext);
    const [body, setBody] = React.useState()
    const [checked, setChecked] = React.useState();

    React.useEffect(()=>{
        axios({
            method:'get',
            url:'http://emt.arcplex.fr:4000/users/profile',
            headers: { 'Authorization' : 'Bearer ' + authState.token},
        })
        .then((res) => {
            if (res.status === 200){
                console.log(res);
                setChecked(true);
            }
            else{
                console.log('Wrong token');
                setChecked(false);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [authState.token])

    React.useEffect(()=>{
        if(checked){
            setBody(<BrowserRouter><Layout/></BrowserRouter>);
        }
        else if (checked === false || authState.token === null){
            setBody(<Login/>)
        }
        else {
            setBody(<LoadingPage/>)
        }
    }, [checked])

    return (
        <>
            {body}
        </>
    )

}

