import './../style/App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

	let [regUser,setRegUser] = useState("");
	let [regPass,setRegPass] = useState("");
	let [regConfirm,setRegConfirm]= useState("");
	let [info,setInfo]= useState("");
	let navigate = useNavigate();
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
      { //  <div classNameName="random">
				//	<button className="button btnsend"><span>Export File</span></button><br></br><br></br>
				//	<button className="button btndelete"><span>Delete</span></button>
        //  </div>
        }
<div className="container">
	<div className="form-container sign-up-container">
		<div className="credentialsdiv">
			<h1>Create Account</h1>
			<span className="infospan">{info}</span>
			<input type="text" name="regUser" onChange={(e) =>setRegUser(e.target.value)} placeholder="Username" />
			<input type="password" name="regPass" onChange={(e) =>setRegPass(e.target.value)} placeholder="Password" />
			<input type="password" name="regConfirm" onChange={(e) =>setRegConfirm(e.target.value)} placeholder="Confirm Password" /><br></br>
			<button className="buttonbig btnsubmit" onClick={register}>Sign Up</button>
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