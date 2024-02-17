import React, { useState } from 'react'
import "./css/navbar.css";
import logo from "../images/logo/logo.png"
import avatar from "../images/avatar.png";
export default function NavBar() {
    const [isToggled,setIsToggled]= useState(false);
    function handleNavBarToggle(e){
        setIsToggled(!isToggled);
    }
  return (
    <nav className={`navbar-container ${isToggled?"toggled":""}`} onMouseEnter={handleNavBarToggle} onMouseLeave={handleNavBarToggle}>
        <div ><img src={logo} alt='logo' className="logo"/></div>
        <div className="navbar-items">
        <div>
        <i class="fa-solid fa-bell fa-2x" ></i>
           {isToggled?<span className="nav-text">alerts</span>:""} 
        </div>
        <div>
            <i class="fa-solid fa-graduation-cap fa-2x"></i>
            {isToggled?<span className="nav-text">training</span>:""}
        </div>
        <div>
        <i class="fa-solid fa-gears fa-2x"></i>
        {isToggled?<span className="nav-text">automation</span>:""}
        </div>
        <div>
        <i class="fa-solid fa-folder-open fa-2x"></i>
        {isToggled?<span className="nav-text">portfolio</span>:""}
        </div>
        <div>
        <i class="fa-solid fa-arrow-trend-up fa-2x"></i>
        {isToggled?<span className="nav-text">trading</span>:""}
        </div>
        </div>
        <div className="user">
            <div className="avatar-container"><img src={avatar} alt='avatar' className="avatar"/> 
            {isToggled?
            <div>
            <div>Moni Roy</div>
            <div>beginner</div>
            </div> 
            :null}
            </div>
            {isToggled? <>
           
            <div>Street Suite: 2.0</div>
            </>: null}
            
        </div>
    </nav>
  )
}
