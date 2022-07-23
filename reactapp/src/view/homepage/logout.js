import React from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


function Logout() {
   /*
    * Logout page which will remove users session
    */
  let navigate = useNavigate();
  useEffect(() => {
    Axios.get("http://localhost:5000/api/logout/logoutuser").then((response => {
      navigate(response.data);}))
  },[]);
  return (
    <>
    </>
  );
}

export default Logout;