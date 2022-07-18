import './App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';

function App() {
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
    </>
  );
}

export default App;
