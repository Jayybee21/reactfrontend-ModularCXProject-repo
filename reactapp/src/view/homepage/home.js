import './../../style/App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactLoading from "react-loading";
//importing application header
import TopNavBar from './topnavbar';

function Home() {
    /*
    * Home page, responsible for: 
    * - displaying header based on session
    * - displaying all our blogs are displayed and can be manipulated
    * - display an add button to add new blog
    */

  //USE STATES
  //getting and setting our blogs
  const [blogs,setBlogs]= useState([]);
  //getting and setting loading block
  const [loading,setLoading]=useState(false);
  //navigation
  const navigate= useNavigate();
 
  //USE EFFECT
  //Will run on page load to retrieve all the blogs from api and save them
  useEffect(() => {
    setLoading(true);
      Axios.get("http://localhost:5000/api/blogs/getblogs").then((response => {
        setBlogs(response.data); 
        setLoading(false);
      }));
  },[]);

  //PAGE FUNCTIONS
  //Redirecting to add page
  const handleAddition = () => {
    navigate("/addblog")
  }
  //Redirecting to edit page by passing ID in URL
  const handleEditing = (blog_id) => {
    navigate(`/editblog/?id=${blog_id}`)
  }
  //Deleting a post by passing ID in URL
  const handleDeletion = (blog_id) => {
    setLoading(true);
     Axios.delete(`http://localhost:5000/api/blogs/deleteblog/?id=${blog_id}`).then((response => {
     setBlogs(response.data);
     setLoading(false);
    }));
  }

  return (
    <>
    <TopNavBar/>
    {loading?(
    <div className="blog_container">
      <ReactLoading type="bars" color="#4DB33D" height={300} width={150} />
      <h2>Connecting to server</h2>
    </div>):(
    <div className="blog_container">
      {blogs.map((blog) => {
        return(
          <div className="blog_post">
            <div class="img_pod">
            <img src={blog.postimage} alt="card__image" class="card__image" width="600"/>
            </div>
            <div className="container_copy">
              <h3>{blog.posttitle}</h3>
              <p>{blog.postshortmessage}</p>
              <h5>Author: {blog.postauthor}</h5>
              <button className="btnedit" onClick={() => handleEditing(blog._id)}><span>🖊</span></button>
              <button className="btndelete" onClick={() => handleDeletion(blog._id)}><span>✖</span></button>
            </div>
          </div>
          )})}
    <button className="btnadd" onClick={handleAddition}><span>Add Blog</span></button>
    </div>
      )}
    </> 
  );
}

export default Home;