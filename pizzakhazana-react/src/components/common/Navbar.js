import React from 'react'
import HomeIcon  from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import HourglassEmptySharpIcon from '@material-ui/icons/HourglassEmptySharp';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import PeopleIcon from '@material-ui/icons/People';
// import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(0),
    },
    extendedIcon: {
      marginTop: theme.spacing(5),
    },
  }));

const Navbar = (props) => {
  const {loggedIn, isAdmin, logout, users, products} = props
  const classes = useStyles();

  return (
    <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <img src={require("../../full logo.png")} alt="logo" href="#" width="120" height="60"></img>            
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" style={{display: 'flex', alignItems: 'center',color:"white"}}>
                        
                            <a class="nav-link" href="/" style={{fontSize : "20px", marginLeft:"10px"}}>
                            <HomeIcon style={{ color: blue[100], verticalAlign:"middle"}}/>Home</a>
                    </li>
                    <li class="nav-item">
                            <a class="nav-link" href="/menu" style={{fontSize : "20px", marginLeft:"10px"}}>
                            <MenuBookIcon style={{ color: blue[100], verticalAlign:"middle" }}/>Menu</a>
                        </li>


                    {loggedIn && !isAdmin &&  <li class="nav-item" >
                            <a class="nav-link" href="/orders" style={{fontSize : "20px", marginLeft:"10px"}}>
                            <LocalShippingIcon style={{ color: blue[100], verticalAlign:"middle" }}/>My Orders</a>
                        </li>}


                    {isAdmin &&  <li class="nav-item">
                            <a class="nav-link" href="/admin/create" style={{fontSize : "20px", marginLeft:"10px"}}>
                            <AddCircleIcon style={{ color: blue[100], verticalAlign:"middle" }}/>Create New Pizza</a>
                        </li>}


                    {isAdmin &&  <li class="nav-item">
                            <a class="nav-link" href="/admin/orders/pending" style={{fontSize : "20px", marginLeft:"10px"}}>
                            <HourglassEmptySharpIcon style={{ color: blue[100], verticalAlign:"middle" }}/>Pending Orders</a>
                        </li>}

                    {isAdmin &&  <li class="nav-item">
                            <a class="nav-link" href="/admin/employee" style={{fontSize : "20px", marginLeft:"10px"}}>
                            <PeopleIcon style={{ color: blue[100], verticalAlign:"middle" }}/>Employees</a>
                        </li>}


                    {loggedIn && !isAdmin && <li class="nav-item">
                            <a class="nav-link" href="/cart" style={{fontSize : "20px", marginLeft:"10px"}}>
                            <ShoppingCartSharpIcon style={{ color: blue[100], verticalAlign:"middle" }}/>Cart</a>
                        </li>}


                    
                </ul>
                <ul class="navbar-nav ml-auto">
                        {!loggedIn && <li class="nav-item">
                            <a class="nav-link" href="/login" style={{fontSize : "20px", marginLeft:"10px"}}>
                            <LockOpenRoundedIcon style={{ color: blue[100], verticalAlign:"middle" }}/>Login</a>
                        </li>}

                        {!loggedIn && <li class="nav-item">
                            <a class="nav-link" href="/register" style={{fontSize : "20px", marginLeft:"10px"}}>
                            <PersonAddOutlinedIcon  style={{ color: blue[100], verticalAlign:"middle" }}/>Register</a>
                        </li>}
                        {loggedIn && <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)" style={{fontSize : "20px", marginLeft:"10px"}} onClick={logout}>
                            <ExitToAppSharpIcon style={{ color: blue[100], verticalAlign:"middle" }}/>Logout</a>
                        </li>}
                </ul>
                
            </div>
            </nav>
        </div>
  )
}

export default Navbar
