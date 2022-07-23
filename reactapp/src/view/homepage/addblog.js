import './../../style/App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import TopNavBar from './topnavbar';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function AddBlog() {
   /*
    * Add Page, responsible for: 
    * - adding a new post in database
    */

  //USE STATES
  //for getting and setting the blogs information
  let [addBlogTitle,setAddBlogTitle] = useState("");
	let [addBlogImage,setAddBlogImage] = useState("");
  let [addBlogMessage,setAddBlogMessage] = useState("");
  //used to display message if problem occurs
	let [info,setInfo] = useState("");

  //VARIABLES
  //for navigation
  let navigate = useNavigate();
  //for setting blog author based on logged user or guest
  let currentUser = Cookies.get("username");
 
   //PAGE FUNCTIONS
  //Adding the new blog to database
  const handleAddition = async () => {
    await Axios.post("http://localhost:5000/api/blogs/addblog", { 
      addBlogTitle: addBlogTitle,
      addBlogImage: addBlogImage,
      addBlogMessage: addBlogMessage,
      addBlogAuthor: currentUser }).then((response) => {
      setInfo(response.data.additional);
      navigate(response.data.url);
      });
  }
  const handleRedirection = () => {
    navigate("/home");
  }

  return (
    <>
    <TopNavBar/>
    <div className="blogform"> 
    <span className="infospan">{info}</span>     
      <input name="addBlogTitle" type="text"placeholder="Blog Title (required)" onChange={(e) => {setAddBlogTitle(e.target.value);}} required/>   
      <input name="addBlogImage" type="text" placeholder="Image URL (optional)" onChange={(e) => {setAddBlogImage(e.target.value);}} />
      <textarea name="addBlogMessage" placeholder="Blog Content  (required)"  onChange={(e) => {setAddBlogMessage(e.target.value);}} required></textarea>
      <button className="btnformsubmit" onClick={handleAddition}>ADD BLOG</button><button className="btnformcancel" onClick={handleRedirection}>CANCEL</button>
    </div>
    </> 
  );
}

export default AddBlog;