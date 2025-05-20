import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
       <div className="bodyOne">
  <div className="textContent">
    <h1>Honoring Tradition</h1>
    <h1 className="greenText">Caring with Compassion</h1>
    <p>
    At Silver Meadows Assisted Living, we provide compassionate,
                    culturally attuned care for Hmong elders. Our mission is to create
                    a safe, nurturing environment where tradition meets quality care,
                    honoring our elders with dignity, comfort, and respect.
    </p>
    <Link to="/ContactUs">
          <Button className="contactBtn" variant="contained">
            Contact Us
          </Button>
          </Link>
  </div>
  <img src="homeimg1.svg" alt="Elderly care" className="imageContent" />
</div>

<div className="bodyTwo">
  <img src="homeimg2.svg" alt="Family care" className="imageContent" />
  <div className="textContent">
    <h1>Established Since 2025</h1>
    <h1 className="greenText">Family You Can Trust</h1>
    <p>
    Our mission is committed to providing exceptional assisted living services. Our facilities
are designed to mirror the comforts of a residential home while fostering independence
among seniors. We offer a supportive environment and prioritize personalized care that
meets the specific needs of our residents for optimal wellness.
    </p>
    <Link to="/Services">
    <Button className="servicesBtn" variant="contained">
      <span className="contactLink">Our Services</span>
    </Button>
    </Link>
  </div>
</div>

        </>
    );
};

export default Home