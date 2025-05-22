import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <>
       <div className="bodyOne">
  <div className="textContent">
    <h1 className="homeTitle">Honoring Tradition</h1>
    <h1 className="greenText">Caring with Compassion</h1>
    <p className="missionStatement">
    Our mission is committed to providing exceptional assisted living services. Our facilities
are designed to mirror the comforts of a residential home while fostering independence
among seniors. We offer a supportive environment and prioritize personalized care that
meets the specific needs of our residents for optimal wellness..
    </p>
    <Link to="/ContactUs">
          <Button className="contactBtn" variant="contained">
            Contact Us
          </Button>
          </Link>
  </div>
  <img src="homeimg1.svg" alt="Elderly care" className="topImage" />
</div>

<div className="bodyTwo">
  <img src="homeimg2.svg" alt="Family care" className="bottonImage" />
  <div className="textContent">
    <h1 className="homeTitle">Established Since 2025</h1>
    <h1 className="greenText">Family You Can Trust</h1>
    <p className="missionStatement">
    Owned and operated by the Vang family, we bring warmth, trust, and
                    cultural understanding to our Hmong elder care services. With deep
                    respect for Hmong traditions, we offer personalized care and a
                    welcoming environment where elders are treated like family. Join us
                    for compassionate support and peace of mind.
    </p>
    <Link to="/Services">
    <Button className="servicesBtn" variant="contained">
      <span>Our Services</span>
    </Button>
    </Link>
  </div>
</div>

        </>
    );
};

export default Home