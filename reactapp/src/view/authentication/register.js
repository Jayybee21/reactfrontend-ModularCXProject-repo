import './../../style/App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Register() {
   /*
    * Registration Page, responsible for: 
    * - Creating a new user
	* - Redirecting to login page
	* - Redirecting to home page
    */

	//USE STATES
	//getting and setting user's information
	let [regUser,setRegUser] = useState("");
	let [regPass,setRegPass] = useState("");
	let [regConfirm,setRegConfirm]= useState("");
	//message to be displayed on page if problem occurs
	let [info,setInfo]= useState("");

	//VARIABLES
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

	//PAGE FUNCTION
	//Adding a new user to the database
	const register = () => {
		Axios.post("http://localhost:5000/api/register/checkreguser",{
			regUser:regUser,
			regPass: regPass,
			regConfirm: regConfirm
		}).then((response) => {
			navigate(response.data.url);
			setInfo(response.data.additional);
		}
		);
	}
	
  return (
    <>
		<div className="container">
			<div className="form-container sign-up-container">
				<div className="credentialsdiv">
				<h1>Create Account</h1>
				<span className="infospan">{info}</span>
				<input type="text" name="regUser" onChange={(e) =>setRegUser(e.target.value)} placeholder="Username"  />
				<input type="password" name="regPass" onChange={(e) =>setRegPass(e.target.value)} placeholder="Password" />
				<input type="password" name="regConfirm" onChange={(e) =>setRegConfirm(e.target.value)} placeholder="Confirm Password" /><br></br>
				<button type="submit" className="buttonbig btnsubmit" onClick={register}>Sign Up</button>
				<br></br>
				<a className="greylink" href={"/home"}>or enter as guest</a>
				</div>
			</div>
			<div className="overlay-container">
				<div className="overlay">
        			<div className="overlay-panel overlay-left">
					<h1>Greetings!</h1>
					<p>Already have an account?&nbsp;&nbsp;<a className="blacklink" href={"/login"}>Sign in here</a></p>
					</div>
				</div>
			</div>
		</div>
    </>
  );
}

export default Register;