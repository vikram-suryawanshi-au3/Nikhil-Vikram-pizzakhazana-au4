import React from "react"
import HomeIcon  from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { blue } from '@material-ui/core/colors';




function Bootstrap (){

    function homeClick (){
        alert("home click")
    }

    function menuClick (){
        alert("menu click")
    }

    function loginClick (){
        alert("login click")
    }

    function registerClick (){
        alert("register click")
    }

    // const {loggedIn, isAdmin, logout, users, products} = props
        
        return (
            <div>
                

                    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <img src={require("../../full logo.png")} alt="logo" href="#" width="180" height="60"></img>
                    <div class="collapse navbar-collapse" id="navbarText">
                    
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item" onClick={() => {homeClick()}}>
                            <a class="nav-link" href="/" style={{fontSize : "25px"}}>
                            <HomeIcon style={{ color: blue[100] }}/>Home</a>
                        </li>

                       <li class="nav-item" onClick={() => {menuClick()}}>
                            <a class="nav-link" href="/menu" style={{fontSize : "25px"}}>
                            <MenuBookIcon style={{ color: blue[100] }}/>Menu</a>
                        </li>
                        
                        <li class="nav-item" onClick={() => {loginClick()}}>
                            <a class="nav-link" href="/login" style={{fontSize : "25px"}}>
                            <LockOpenRoundedIcon style={{ color: blue[100] }}/>Login</a>
                        </li>

                        <li class="nav-item" onClick={() => {registerClick()}}>
                            <a class="nav-link" href="/register" style={{fontSize : "25px"}}>
                            <PersonAddOutlinedIcon  style={{ color: blue[100] }}/>Register</a>
                        </li>
                        
                        </ul>
                    </div>
                    </nav>
            </div>
        )
    
}

export default Bootstrap