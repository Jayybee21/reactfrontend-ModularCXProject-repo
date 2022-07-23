
import React from "react";
//Our application's routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//importing our views
import Login from "./view/authentication/login";
import Home from './view/homepage/home';
import Register from "./view/authentication/register";
import Logout from "./view/homepage/logout";
import EditBlog from "./view/homepage/editblog";
import AddBlog from "./view/homepage/addblog";
import Error from "./view/404";
import Axios from "axios";

function App() {
  //enabling the usage and manipulation of user session on frontend side
  Axios.defaults.withCredentials = true;
  //populating all possible routes of our application
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/addblog" exact element={<AddBlog />} />
        <Route path="/editblog" exact element={<EditBlog />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/logout" exact element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;