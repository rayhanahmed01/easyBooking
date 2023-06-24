import React, { useContext } from "react";
import { faPlaneDeparture, faSailboat } from "@fortawesome/free-solid-svg-icons";;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../../context/AuthContext.js";



const Navbar = () => {
    const { user } = useContext(AuthContext);

    const logout = () => {
        localStorage.removeItem('user');
        window.location.reload(false);

    }
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo" >
                        <h3>Easy<span>Booking</span></h3></span></Link>
                {user ? <div className="">
                    <img
                        src={user.img}
                        alt=""
                        className="avatar"
                        title={user.username}
                    />
                </div> : (
                    <div className="navItems">
                        <Link to="/registration"><button className="navButton">Register</button></Link>
                        <Link to="/login"><button className="navButton">Login</button></Link>
                    </div>
                )}
                {user ? <span className="logout" onClick={logout}>
                    {/* <img
                        src="https://www.freeiconspng.com/thumbs/sign-out-icon/sign-out-logout-icon-0.png"
                        alt="Log Out"
                        className="avatar"
                        title="logout"
                    /> */}
                    <h5>Logout</h5>
                </span> : (
                    <span className="">
                        {/* <Link to="/registration"><button className="navButton">Register</button></Link>
                        <Link to="/login"><button className="navButton">Login</button></Link> */}
                    </span>
                )}
            </div>
        </div>
    )
}

export default Navbar