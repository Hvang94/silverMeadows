import CheckIcon from '@mui/icons-material/Check';
import "./Services.css";

function Services() {
    const services = [
        "Around the clock onsite care staff and 24 hour on-call nurse",
        "Teeth, mouth, denture and hair care",
        "Assistance with mobility and ambulation including use of walker, cane or crutches",
        "Skin care excluding wound care",
        "Assistance with dressing and undressing",
        "Toileting, including use and care of bedpan, urinal, or toilet",
        "Meal preparation, food purchasing and meal serving",
        "Accompanying the recipient to obtain medical diagnoses and treatment"
      ];
    return(
        <div className="servicesPage">
      <div className="heroSection">
        <img src="servicesimg.svg" alt="Explore Our Services" className="heroImage" />
        <div className="heroOverlay">
          <h1>Explore Our Services</h1>
        </div>
      </div>

      <div className="contentSection">
        <h2 className="sectionTitle">Assisted Living</h2>
        <p className="description">
          Assisted living at Silver Meadows provides compassionate, culturally attuned care tailored to the needs of our Hmong elders.
          We strive to create a warm, family-like environment where tradition and quality care come together. Our <strong>services include</strong>:
        </p>

        <ul className="servicesList">
          {services.map((service, index) => (
            <li key={index}>
              <CheckIcon className="checkIcon" />
              {service}
            </li>
          ))}
        </ul>

        <h2 className="sectionTitle">Additional Services</h2>
<p className="description additionalServices">
  We also provide professional Hmong medical interpreters for our clients, ensuring that language is never a barrier to quality care.
  Our interpreters are trained to facilitate accurate and compassionate communication between patients and medical providers, giving families peace of mind and ensuring elders receive the care they deserve.
</p>
      </div>
      </div>
    )
}
export default Services