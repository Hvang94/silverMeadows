import { Button } from "@mui/material";

function Home() {
    return (
        <>
            <div className="bodyOne">
                <h1>Honoring Tradition</h1>
                <h1>Caring with Compassion</h1>
                <p>
                    At Silver Meadows Assisted Living, we provide compassionate,
                    culturally attuned care for Hmong elders. Our mission is to create
                    a safe, nurturing environment where tradition meets quality care,
                    honoring our elders with dignity, comfort, and respect.
                </p>
                <Button className="contactBtn" variant="contained">
                    <span className="contactLink">Contact Us</span>
                </Button>
                <img src="homeimg1.svg"/>
            </div>
            <div className="bodyTwo">
                <h1>Established Since 2025</h1>
                <h1>Family You Can Trust</h1>
                <p>
                    Owned and operated by the Vang family, we bring warmth, trust, and
                    cultural understanding to our Hmong elder care services. With deep
                    respect for Hmong traditions, we offer personalized care and a
                    welcoming environment where elders are treated like family. Join us
                    for compassionate support and peace of mind.
                </p>
                <img src="homeimg2.svg"/>
            </div>
        </>
    );
};

export default Home