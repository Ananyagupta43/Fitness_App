import React from "react";
import "./login/Login&Signup.css";
import GoogleIcon from "./../assets/icons/google-icon.png";
import FbIcon from "./../assets/icons/fb-icon.png";
import LoginInfo from "./../assets/icons/login-icon.png";

const SignUp = () => {
    return <div style={{ background: "black", height: "100vh", color: "white" }}>
        <img src={LoginInfo} alt="person" style={{ position: "absolute", right: "44%", top: "7%", zIndex: "1" }} ></img>
        <form className="form" style={{ position: "absolute", left: "40%" }}>
            <label for="firstname" className="inputs-label">First Name</label>
            <input type="text" id="firstname" placeholder="First Name" className="inputs"></input>
            <label for="lastname" className="inputs-label">Last Name</label>
            <input type="text" id="lastname" placeholder="Last Name" className="inputs"></input>
            <label for="email" className="inputs-label">Email</label>
            <input type="email" id="email" placeholder="emailId@gmail.com" className="inputs"></input>
            <label for="contact" className="inputs-label">Mobile No.</label>
            <input type="tel" id="contact" placeholder="123-456-7890" className="inputs"></input>
            <button className="button" style={{ marginTop: "8px" }}>Sign Up</button>
            <div style={{ marginTop: "6px", marginBottom: "15px", textAlign: "center", fontSize: "14px" }}>Already a member? <a href="/login" style={{ textDecoration: "none", color: 'grey', fontWeight: "600" }}>Log In</a></div>
            <hr />
            <div style={{ margin: "10px", textAlign: "center", fontSize: "14px" }}>Sign up with ----</div>
            <div style={{ position: "relative", left: "33%" }}>
                <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src={GoogleIcon} alt="google-logo" style={{ height: "32px", width: "32px", marginRight: "15px", cursor: "pointer" }}></img></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src={FbIcon} alt="facebook-logo" style={{ height: "32px", width: "32px", cursor: "pointer" }}></img></a>
            </div>
        </form>
    </div>
}
export default SignUp;