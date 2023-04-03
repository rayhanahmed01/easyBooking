import { faPlaneDeparture, faSailboat } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./navbar.css"
import "./login/login"


const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">
                <FontAwesomeIcon icon={faPlaneDeparture} /> 
                   Easy Booking</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button  className="navButton" >Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar