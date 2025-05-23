function ContactUs() {
  return (
    <>
      <img src="contactimg.svg" />

      <h1>SORRY UNDER CONSTRUCTION</h1>
      <h2>Contact Us</h2>
      <p>
        Have questions? We’d love to hear from you! Contact us to learn more
        about Silver Meadows Assisted Living.
      </p>

      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" placeholder="Your Name" required />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </label>

          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              required
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}
export default ContactUs;
