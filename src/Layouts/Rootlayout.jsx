import { NavLink,Outlet } from "react-router-dom";
import { useState } from "react";
import "../style/index.css"

function RootLayout (){
   
    return(
        <>
        <NavLink className={({isActive,isPending})=>
        isActive ?"active" : isPending ? "pending" : ""
    }  to="/">Home</NavLink> | <NavLink to="/blog">Blog</NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/mySetup">My Setup</NavLink> 
        <Outlet/>
        </>
    )
}

export default RootLayout;