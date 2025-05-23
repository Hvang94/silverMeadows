import "./Services.css";

function Services() {
  const services = [
    "Around the clock onsite care staff and 24 hour on-call nurse",
    "Nursing assessments and individualized residential care/service plans",
    "Assistance with all personal cares including ADLs",
    "Medication management, supervision, and administration",
    "On-site activities and community outings",
    "Laundry, Housekeeping with linen amenities",
    "Transportation assistance to appointments",
    "Three home cooked meals and snacks daily",
  ];
  return (
    <div className="servicesPage">
      <div className="heroSection">
      <div className="heroImage">
        <img
          src="servicesimg.svg"
          alt="Explore Our Services"
          
        />
        </div>
        <h2 className="sectionTitle">Assisted Living</h2>
        <p className="description">
          Assisted living at Silver Meadows provides compassionate, culturally
          attuned care tailored to the needs of our Hmong elders. We strive to
          create a warm, family-like environment where tradition and quality
          care come together. Our <strong>services include</strong>:
        </p>
      <div className="servicesList">
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <img src="checkmark.svg" />
              {service}
            </li>
          ))}
        </ul>
        </div>
        <h2 className="sectionTitle">Additional Services</h2>
        <p className="description">
          We also provide professional Hmong medical interpreters for our
          clients, ensuring that language is never a barrier to quality care.
          Our interpreters are trained to facilitate accurate and compassionate
          communication between patients and medical providers, giving families
          peace of mind and ensuring elders receive the care they deserve.
        </p>
        </div>
      </div>
  );
}
export default Services;
