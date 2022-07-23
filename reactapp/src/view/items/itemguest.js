import './../../style/App.css';
import React from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function ItemGuest() {
  /*
   * Header page displayed when guest enters page
   */
  let navigate = useNavigate();
    //retrieving username from saved cookie
  const currUser = Cookies.get('username');
  return (
    <div className="menu">
      <li><a className='menulink' href="/login">Login</a></li>
      <li><a className='menulink' href="/register">Register</a></li>
      <li><span>{currUser}</span></li>
    </div>
  );
}

export default ItemGuest;