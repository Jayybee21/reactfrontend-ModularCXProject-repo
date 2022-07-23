import './../../style/App.css';
import React, {useState, useEffect} from "react";
import Cookies from 'js-cookie';
import ItemUser from './../items/itemuser';
import ItemGuest from './../items/itemguest';

function TopNavBar(){
   /*
    * Application's top navigation bar
    */

    //CONDITIONS
    //displaying user navigation bar based on cookie if user is logged in
        if (Cookies.get("usertype") === "user" || Cookies.get("usertype") === "admin"){
             return (
             <div className = "topnavbar">
                <ItemUser/>
             </div>);
        }
    //or display guest navigation bar based if no login
        else{
            Cookies.set("username","guest");
            return (
            <div className = "topnavbar">
                <ItemGuest/>
            </div>);
        }
}

export default TopNavBar;