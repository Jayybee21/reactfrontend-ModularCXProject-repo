
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./view/login";
import Home from './view/home';
import Register from "./view/register";
import Logout from "./view/logout";
import Error from "./view/404";

//import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/logout" exact element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;