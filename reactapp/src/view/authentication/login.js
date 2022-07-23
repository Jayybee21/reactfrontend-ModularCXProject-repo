import './../../style/App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Login() {
   /*
    * Login Page, responsible for: 
    * - logging in a user 
	* - redirect to Register page
	* - reditect to Home page
    */

	//USE STATES
	//getting and setting inputed user information
	let [logUser,setLogUser] = useState("");
	let [logPass,setLogPass] = useState("");
	//used to display message if problem occurs
	let [info,setInfo] = useState("");

	//VARIABLE
	//for redirection
	let navigate = useNavigate();

	//USE EFFECT
	//if user is logged in, will be kicked from this page
	useEffect(() => {
	let userAuthenticated = Cookies.get("usertype");
		if (userAuthenticated){
			navigate("/home");
		}
	},[]);

	//PAGE FUNCTIONS
	//Logging user to the application
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
		<div className="container">
			<div className="form-container sign-up-container">
				<div className="credentialsdiv">
				<h1>Sign in</h1>
				<span className="infospan">{info}</span>
				<input type="text" name="logUser" placeholder="Username"  onChange={(e) => {setLogUser(e.target.value);}}required/>
				<input type="password" name="logPass" placeholder="Password" onChange={(e) => {setLogPass(e.target.value);}}required/>
            	<br></br>
				<button className="btnsubmit" onClick={handleLogin}>Login</button>
				<br></br>
				<a className="greylink" href={"/home"}>or enter as guest</a>
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