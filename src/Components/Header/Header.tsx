import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="imgs">
        <img className="logo" src="logo.png" alt="Logo" />
        <img className="title" src="title.svg" alt="Title" />
      </div>
      <div className="nav">
        <Link to="/Home" className="homeLink">
          HOME
        </Link>
        <Link to="/Services" className="serviceLink">
          SERVICES
        </Link>
        <Link to="/ContactUs">
          <Button className="contactBtn" variant="contained">
            Contact Us
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
