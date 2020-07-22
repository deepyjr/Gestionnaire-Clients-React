import React from 'react';
import Header from './Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from './Sidebar';
import {
    Switch,
    Route,
  } from "react-router-dom";
import Customers from '../views/Customers/Customers';
import Dashboard from '../views/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import SingleCustomer from '../views/Customers/SingleCustomer'


function Layout() {
    
    const useStyles = makeStyles((theme) => ({
        root: {
        display: 'flex',
        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        },
        
    }));
  const classes = useStyles();

    return (
        <div>
            <CssBaseline/>
            <Header/>
            <Sidebar/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route exact path='/customers' component={Customers}/>
                    <Route exact path='/customer/:id' component={SingleCustomer}/>
                </Switch>
            </main>
        </div>
    );
  }
export default Layout;
  