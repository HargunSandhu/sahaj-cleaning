import { useEffect } from "react";
import "./styles/Home.css";
import floorSurfacing from "../assets/3mfloor-surfacing.png";
import floorPolishing from "../assets/floor-polishing.png";
import officeCleaning from "../assets/office-cleaning.png";
import logo from "../assets/logo.jpeg";
import { ShieldCheck, Hammer, Droplets, Sparkles } from "lucide-react";

const sections = [
  {
    title: "3M Hard Floor Surfacing.",
    desc: "Specialist application of premium 3M surfacing systems for hard floors. Guaranteed durability, superior shine, and easy cleaning for commercial properties.",
    img: floorSurfacing,
  },
  {
    title: "Floor Polishing.",
    desc: "Professional floor polishing for all hard surfaces. Achieve mirror-like results, slip-resistance, and long-term protection. Suitable for lobbies, corridors, and high-use spaces.",
    img: floorPolishing,
  },
  {
    title: "Office Cleaning.",
    desc: "Affordable, thorough cleaning for offices, boardrooms, kitchens, and bathrooms, with daily or periodic plans.",
    img: officeCleaning,
  },
];

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fadeUp");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main">
      <div className="heading fadeUp">
        <h1 className="primaryText">Sahaj Group Pty Ltd.</h1>
        <h2 className="secondaryText">Trusted Cleaners - Australia.</h2>
      </div>

      <div className="sections">
        {sections.map((item, index) => (
          <div
            key={index}
            className={`section fadeUp ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="sectionImage">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="sectionText">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="features fadeUp">
        <div className="featureItem">
          <ShieldCheck size={32} />
          <p>3M Surfaces</p>
        </div>

        <div className="featureItem">
          <Hammer size={32} />
          <p>Surface Durability</p>
        </div>

        <div className="featureItem">
          <Droplets size={32} />
          <p>Stain Resistant</p>
        </div>

        <div className="featureItem">
          <Sparkles size={32} />
          <p>Bright Finish</p>
        </div>
      </div>

      <div className="infoSection fadeUp">
        <div className="infoBlock">
          <h2>Specialist in 3M Hard Floor Surfacing.</h2>
          <p>
            Floor protection and enhancement using premium 3M products for
            long-lasting results in high-use areas. Our certified process
            ensures durability, gloss, and easy maintenance, making it ideal for
            commercial environments.
          </p>
        </div>

        <div className="infoBlock">
          <h2>Expert Floor Polishing Services.</h2>
          <p>
            Restore and enhance your hard floors with professional polishing.
            Our specialists deliver a flawless, high-gloss finish while
            improving safety and extending floor life.
          </p>
        </div>

        <div className="areasBlock">
          <h4>Areas We Cover - Australia</h4>
          <ul>
            <li>New South Wales (NSW)</li>
            <li>Western Australia (WA)</li>
            <li>Australian Capital Territory (ACT)</li>
            <li>Victoria (VIC)</li>
          </ul>
        </div>
      </div>

      <div className="contactSection fadeUp">
        <div className="quoteBox">
          <h2>Request a Quote.</h2>
          <p>
            Contact us at{" "}
            <a className="highlightedText" href="tel:0466973399">
              0466973399
            </a>{" "}
            or email us at{" "}
            <a
              className="highlightedText"
              href="mailto:sahajgroupservices@gmail.com"
            >
              sahajgroupservices@gmail.com
            </a>
          </p>
          <button className="quoteBtn">Get a Quote</button>
        </div>

        <form className="contactForm">
          <div className="row">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>

          <textarea placeholder="Your message..." rows={5}></textarea>

          <button type="submit" className="submitBtn">
            Send us a message
          </button>
        </form>

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
      </div>
    </div>
  );
};

export default Home;
