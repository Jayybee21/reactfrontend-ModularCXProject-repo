import './../../style/App.css';
import React from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function ItemUser() {
  /*
   * Header page displayed when user is succesfully logged in
   */
  let navigate = useNavigate();
  //retrieving username from saved cookie
  const currUser = Cookies.get('username');
  return (
    <div className="menu">
      <li><a className='menulink' href="/logout">Logout</a></li>
      <li><span>{currUser}</span></li>
    </div>
  );
}

export default ItemUser;