import "./ContactUs.css";
import { Button } from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const formRef = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();
console.log("test");
console.log(formRef.current);

    emailjs
      .sendForm("service_0ctz8vr", "template_w5faosc", formRef.current, {
        publicKey: "_Awz4C7gSCEWCOmtJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className="contactPage">
        <img src="contactimg.svg" />

        <h2 className="contactTitle">Contact Us</h2>
        <p className="questions">
          Have questions? We'd love to hear from you! Contact us to learn more
          about Silver Meadows Assisted Living.
        </p>
        <div className="formAndTextContainer">
          <div className="inputContainer">
            <form className="formContainer" ref={formRef} onSubmit={sendEmail}>
              <label>
                Name<span className="required">*</span>
              </label>
              <input type="text" name="name" className="inputBox" required />

              <label>
                Email<span className="required">*</span>
              </label>
              <input type="email" name="email" className="inputBox" required />

              <label>
                Phone<span className="required">*</span>
              </label>
              <input type="tel" name="phone" className="inputBox" required />

              <label>
                Message<span className="required">*</span>
              </label>
              <textarea
                className="messageBox"
                name="message"
                required
              ></textarea>

              <Button className="msgBtn" type="submit">Send Message</Button>
            </form>
          </div>
          <div className="textContainer">
            <div className="contactLogo">
              <img src="logo.png" alt="Logo" />
            </div>
            <div className="contactInfo">
              <p>Maplewood, MN 55119</p>
              <p>PHONE: (651) 775-4627</p>
              <p>FAX: (651) 123-4567</p>
              <p>EMAIL: may.lee@silvermeadowsmn.com</p>
              <p>HOURS: 8am-5pm</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactUs;
