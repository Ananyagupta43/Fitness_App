import React from "react";
import "./login/Login&Signup.css";
import GoogleIcon from "./../assets/icons/google1-icon.png";
import FbIcon from "./../assets/icons/fb-icon2.png";
import LoginInfo from "./../assets/icons/login-icon.png";
import Navbar from "./../components/Navbar";

const SignUp = () => {
    return <div >
    <Navbar />
        <div style={{ textAlign: "center" }}>
            <div className="background">
                <div className="falling-object object-1"></div>
                <div className="falling-object object-2"></div>
                <div className="falling-object object-3"></div>
                <div className="falling-object object-4"></div>
                <div className="falling-object object-5"></div>
                <div className="falling-object object-6"></div>

                <div className="falling-icon icon-1"></div>
                <div className="falling-icon icon-2"></div>
                <div className="falling-icon icon-3"></div>
                <div className="falling-icon icon-4"></div>
                <div className="falling-icon icon-5"></div>
                <div className="falling-icon icon-6"></div>

                <div className="falling-sticker sticker-1"></div>
                <div className="falling-sticker sticker-2"></div>
                <div className="falling-sticker sticker-3"></div>
                <div className="falling-sticker sticker-4"></div>
                <div className="falling-sticker sticker-5"></div>
                <div className="falling-sticker sticker-6"></div>

            </div>
        </div>
        <div style={{ zIndex: "1" }}>
        <img src={LoginInfo} alt="person" style={{ position: "absolute", left: "50%", top: "10%", zIndex: "1" }} ></img>
            <form className="form" style={{ position: "absolute", left: "34%", margin: "40px" }}>
                <label for="firstname" className="inputs-label">First Name</label>
                <input type="text" id="firstname" placeholder="First Name" className="inputs"></input>
                <label for="lastname" className="inputs-label">Last Name</label>
                <input type="text" id="lastname" placeholder="Last Name" className="inputs"></input>
                <label for="email" className="inputs-label">Email</label>
                <input type="email" id="email" placeholder="emailId@gmail.com" className="inputs"></input>
                <label for="contact" className="inputs-label">Mobile No.</label>
                <input type="tel" id="contact" placeholder="123-456-7890" className="inputs"></input>
                <button className="button" style={{ marginTop: "8px" }}>Sign Up</button>
                <div style={{ marginTop: "6px", marginBottom: "15px", textAlign: "center", fontSize: "14px",color:"white" }}>Already a member? <a href="/login" style={{ textDecoration: "none", color: 'yellow', fontWeight: "600" }}>Log In</a></div>
                <hr style={{backgroundColor: "black", border: "none", height: "2px"}}/>
                <hr style={{backgroundColor: "grey", border: "none", height: "2px"}}/>
                <hr style={{backgroundColor: "black", border: "none", height: "2px"}}/>
                <div style={{ position: "relative", left: "35%", marginTop: "10px" }}>
                    <a href="https://www.google.com/" target="_blank" rel="noreferrer"><img src={GoogleIcon} alt="google-logo" style={{ height: "44px", width: "44px", marginRight: "20px", cursor: "pointer" }}></img></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src={FbIcon} alt="facebook-logo" style={{ height: "44px", width: "44px", cursor: "pointer" }}></img></a>
                </div>
            </form>
        </div>
    </div>
}
export default SignUp;