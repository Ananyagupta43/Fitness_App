import React from "react";
import './Login&Signup.css';
import { Checkbox, Stack } from "@mui/material";
import LoginInfo from "./../../assets/icons/login-icon.png";
import FitnessBanner from "../../components/FitnessBanner";
const Login = () => {
    return <Stack direction="row" className="box-container" >

        <FitnessBanner></FitnessBanner>
        <div style={{ width: "100%", height: "577px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={LoginInfo} alt="person" style={{ position: "absolute", right: "16%", bottom: "62%", zIndex: "1" }} ></img>
            <form className="form">
                <label for="username" className="inputs-label">UserName  </label>
                <input type="text" placeholder="Name" id="username" className="inputs"></input>
                <label for="password" className="inputs-label">Password  </label>
                <input type="password" placeholder="****" id="password" className="inputs"></input>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", marginTop: "5px" }}>
                    <div style={{ display: "flex", color: "white" }}>
                        <Checkbox style={{ height: "10px", width: "10px", marginRight: "5px", color: "white" }}></Checkbox>
                        <div style={{ paddingTop: "1px" }}>Remember Me</div>
                    </div>
                    <div style={{ color: "white" }}>Forgot Password</div>
                </div>

                <button className="button">Log In</button>
            </form>
        </div>

    </Stack>
}
export default Login;