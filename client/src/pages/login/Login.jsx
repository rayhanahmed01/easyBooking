import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

    const {user, loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };

    return (
    
        <div className="container">
            <div className="login">
                <div class="lContainer">
                    <div class="title"><span>Login Form</span></div>
                    <form>
                        <div class="lInput">
                            <i className="fas fa-user"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg></i>
                            <input type="text" placeholder="Username" id="username" onChange={handleChange} />
                        </div>
                        <div className="lInput">
                            <i class="fas fa-lock"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" /></svg></i>
                            <input type="password" placeholder="Password" id="password" onChange={handleChange} />
                        </div>
                        <div className="pass"><a href="#">Forgot password?</a></div>

                        <button className="button" disabled={loading} onClick={handleClick}>Login</button>

                        {error && <span>{error.message}</span>}
                        <div class="signup-link">Not a member? <a href="./registration"> Signup now</a> </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;