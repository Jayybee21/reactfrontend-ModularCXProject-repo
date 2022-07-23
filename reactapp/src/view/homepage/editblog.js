import './../../style/App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import TopNavBar from './topnavbar';
import { useNavigate ,useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import ReactLoading from "react-loading";

function EditBlog() {
    /*
    * Edit page, responsible for: 
    * - change existing blog information
    */
   
  //USE STATES
  //getting and setting loading block
  const [loading,setLoading]=useState(false);
  //getting and setting each blog information
  let [editBlogTitle,setEditBlogTitle] = useState("");
	let [editBlogImage,setEditBlogImage] = useState("");
  let [editBlogMessage,setEditBlogMessage] = useState("");
  let [editBlogId,setEditBlogId] = useState("");
  const[searchParams,setSearchParams] = useSearchParams();
  const[userId,setUserId] = useState(searchParams.get('id'))
  //used to display message if problem occurs
	let [info,setInfo] = useState("");
  //VARIABLES
   //for navigation
  let navigate = useNavigate();
  //setting author value based on user login or guest
  let currentUser = Cookies.get("username");

  //USE EFFECT
  //Retrieving allpost values based on it's ID
  useEffect(() => {
    setLoading(true);
      Axios.get(`http://localhost:5000/api/blogs/editblog/?id=${userId}`).then((response => {
        setInfo(response.data.additional);
        setEditBlogTitle(response.data.posttitle);
        setEditBlogMessage(response.data.postmessage);
        setEditBlogImage(response.data.postimage);
        setEditBlogId(response.data._id);
        setLoading(false);
      }));
  },[]);

  //PAGE FUNCTIONS
  //Submiting changes to be made to post
  const handleConfiguration = async () => {
    await Axios.patch(`http://localhost:5000/api/blogs/editblog/?id=${userId}`, { 
      editBlogTitle: editBlogTitle,
      editBlogImage: editBlogImage,
      editBlogMessage: editBlogMessage,
      editBlogAuthor: currentUser }).then((response) => {
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
    {loading?(
    <div className="blog_container">
      <ReactLoading type="bars" color="#4DB33D" height={300} width={150} />
      <h2>Connecting to server</h2>
    </div>):(
    <div className="blogform">     
     <span className="infospan">{info}</span>  
      <input name="editBlogTitle" type="text"placeholder="Blog Title" value={editBlogTitle} onChange={(e) => {setEditBlogTitle(e.target.value);}}required/>   
      <input name="editBlogImage" type="text" placeholder="Image URL" value={editBlogImage} onChange={(e) => {setEditBlogImage(e.target.value);}} />
      <textarea name="editBlogMessage" placeholder="Blog Content"  value={editBlogMessage} onChange={(e) => {setEditBlogMessage(e.target.value);}}required></textarea>
      <button className="btnformsubmit" onClick={handleConfiguration}>EDIT BLOG</button><button className="btnformcancel" onClick={handleRedirection}>CANCEL</button>
    </div>)}
    </> 
  );
}

export default EditBlog;