import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLogo">
        <img src={logo} alt="logo" />
      </div>

      <div className="footerCol">
        <h4>Quick Links</h4>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="footerCol">
        <h4>Contact</h4>
        <a href="mailto:sahajgroupservices@gmail.com">
          sahajgroupservices@gmail.com
        </a>
        <a href="tel:0466973399">0466973399</a>
        <p>NSW, WA, ACT, VIC</p>
      </div>
    </div>
  );
};

export default Footer;
