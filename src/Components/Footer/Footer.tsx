import "./Footer.css";

function Footer() {
return(
    <footer className="footer">
    <div className="footer-left">
      <img src="logo.png" alt="Logo" className="footer-logo" />
      <div>
        <p>PHONE: (651) 775-4627</p>
        <p>FAX: (651) 123-4567</p>
        <p>EMAIL: may.lee@silvermeadowsmn.com</p>
        <p>HOURS: 8am-5pm</p>
      </div>
    </div>
    <div className="footer-right">
      <p className="copyright">Copyright © 2025.</p>
    </div>
  </footer>
  
)
}

export default Footer