import "./Header.css"
// import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function Header() {
    return(
        <header className="header">
            <img className="logo" src="logo.png" />
            <img className="title" src="title.svg" />
            {/* <Link to="/Home">Home */}
            <div className="nav">
            <span className="homeLink">HOME</span>
            {/* </Link> */}
            <span className="serviceLink">SERVICES</span>
            <Button className="contactBtn" variant="contained"><span className="contactLink">Contact Us</span></Button>
            </div>
        </header>
    )
}

export default Header