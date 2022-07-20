import './../style/App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
	let [logUser,setLogUser] = useState("");
	let [logPass,setLogPass] = useState("");
	let [info,setInfo] = useState("");
	let navigate = useNavigate();

	const handleLogin = async () => {
		await Axios.post("http://localhost:5000/api/login/checkloguser", { 
		logUser: logUser,
		logPass:logPass}).then((response) => {
			navigate(`${response.data.url}`);
			setInfo(response.data.additional);
		});
	}
  return (
    <>
      { //  <div classNameName="random">
				//	<button className="button btnsend"><span>Export File</span></button><br></br><br></br>
				//	<button className="button btndelete"><span>Delete</span></button>
        //  </div>
        }
<div className="container">
	<div className="form-container sign-up-container">
		<div className="credentialsdiv">
			<h1>Sign in</h1>
			<span className="infospan">{info}</span>
			<input type="text" name="logUser" placeholder="Username"  onChange={(e) => {setLogUser(e.target.value);}}required/>
			<input type="password" name="logPass" placeholder="Password" onChange={(e) => {setLogPass(e.target.value);}}required />
            <br></br>
			<button className="buttonbig btnsubmit" onClick={handleLogin}>Sign In</button>
		</div>
	</div>
	<div className="overlay-container">
		<div className="overlay">
            <div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Don't have an account?&nbsp;&nbsp;<a className="blacklink" href={"/register"}>Sign Up here</a></p>
				
	        </div>
		</div>
	</div>
</div>
    </>
  );
}

export default Login;