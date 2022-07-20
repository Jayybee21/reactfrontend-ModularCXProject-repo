import './../style/App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';

function Home() {
  const [docs,setDocs]= useState([]);

  useEffect(() => {
      Axios.get("http://localhost:5000/api/getusers").then((response => {
        setDocs(response.data); 
      }))
  },[]);

  return (
    <>
    <div className="displayDocs">
      {docs.map((doc) => {
        return(
        <div>
          <h1>Name: {doc.name}</h1>
          <h1>Age: {doc.age}</h1>
          <h1>Username: {doc.username}</h1>
        </div>
        );
      })}
    </div>
      { //  <div className="random">
				//	<button className="button btnupload"><span>Upload</span></button><br></br><br></br>
				//	<button className="button btnpage"><span><span>New page</span></span></button><br></br><br></br>
				//  <button className="button btnconfirm"><span>Render</span></button><br></br><br></br>
				//	<button className="button btnsend"><span>Export File</span></button><br></br><br></br>
				//	<button className="button btndelete"><span>Delete</span></button>
        //  </div>
        }
    </>
  );
}

export default Home;