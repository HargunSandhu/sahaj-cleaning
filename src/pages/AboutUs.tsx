import { useNavigate } from "react-router-dom";
import "./styles/AboutUs.css";
import Footer from "../components/Footer";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="about">
        <div className="aboutCard">
          <h1 className="title">Sahaj Group Pty Ltd</h1>
          <h2 className="subtitle">Cleaning</h2>

          <p className="sectionTitle">About Us</p>

          <p className="text">
            Sahaj Group Pty Ltd is your specialist in 3M Hard Floor Surfacing
            and your trusted provider of commercial and specialist cleaning
            services across NSW, WA, ACT, and VIC. We deliver high quality
            results for businesses of all scales, ensuring safe, hygienic, and
            sparkling spaces.
          </p>

          <p className="text">
            Contact us at{" "}
            <a href="tel:0466973399" className="link">
              0466973399
            </a>{" "}
            or{" "}
            <a href="mailto:sahajgroupservices@gmail.com" className="link">
              sahajgroupservices@gmail.com
            </a>
            . Our team covers NSW, WA, ACT, and VIC, offering: House Cleaning,
            Office Cleaning, Shopping Centre Cleaning, Carpet Cleaning, Window
            Cleaning, Stripping And Sealing Hard Floor, Floor Scrubbing, Tile
            And Grout Cleaning, Floor Polishing, High Pressure And Steam
            Cleaning, and are specialists in 3M Hard Floor Surfacing.
          </p>

          <button className="btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
