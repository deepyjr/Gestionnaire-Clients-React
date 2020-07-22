import React from 'react';
import { Link } from "react-router-dom";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
 
export default function Nav() {
 
 return (
     <div>
        <MenuList>
            <MenuItem component={Link} to={'/'} >
                <ListItemIcon>
                <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </MenuItem> 
            <MenuItem component={Link} to={'/customers'} >
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Customers" />
            </MenuItem>
        </MenuList>
     </div>
    
 );
}
