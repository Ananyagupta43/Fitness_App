import React from "react";
import './Login.css';
import LoginPicture from "./../../assets/images/yoga_img.jpg";
import { Checkbox, Stack } from "@mui/material";
import LoginInfo from "./../../assets/icons/login-icon.png";

const Login = () => {
    return <Stack direction="row" >
        <div style={{ width: "70%" }}>
            <img src={LoginPicture} alt="yoga pose" style={{ height: "577px" }}></img>
        </div>
        <div className="login-image-text">
            <p>Slowly</p>
            <p>but</p>
            <p>Surely</p>
            <p>you</p>
            <p>will</p>
            <p>get</p>
            <p>there</p>
        </div>

        <div style={{ width: "42%", height: "577px", display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: "linear-gradient(to right, black, #e5e5e5)" }}>
            <img src={LoginInfo} alt="person" style={{ position: "absolute", right: "16%", bottom: "62%", zIndex: "1" }} ></img>
            <form className="login-form">
                <label for="username" className="inputs-label">UserName  </label>
                <input type="text" placeholder="Name" id="username" className="login-inputs"></input>
                <label for="password" className="inputs-label">Password  </label>
                <input type="password" placeholder="****" id="password" className="login-inputs"></input>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", marginTop: "5px" }}>
                    <div style={{ display: "flex", color: "white" }}>
                        <Checkbox style={{ height: "10px", width: "10px", marginRight: "5px", color: "white" }}></Checkbox>
                        <div style={{ paddingTop: "1px" }}>Remember Me</div>
                    </div>
                    <div style={{ color: "white" }}>Forgot Password</div>
                </div>

                <button className="login-button">Log In</button>
            </form>
        </div>

    </Stack>
}
export default Login;