import { useEffect } from "react";
import "./styles/Home.css";

import floorPolishing from "../assets/floor-polishing.png";
import floorScrubbing from "../assets/floor-scrubbing.png";
import floorStripping from "../assets/stripping-floors.png";
import { ShieldCheck, Hammer, Droplets, Sparkles } from "lucide-react";
import Footer from "../components/Footer";

const sections = [
  {
    title: "Stripping hard floors.",
    desc: "Specialists in 3M hard floor surfacing for unmatched durability and shine.",
    img: floorStripping,
  },
  {
    title: "Floor Scrubbing.",
    desc: "Deep scrubbing for spotless presentation in every setting.",
    img: floorScrubbing,
  },
  {
    title: "Floor Polishing.",
    desc: "Professional floor polishing for long-lasting gloss and safety.",
    img: floorPolishing,
  },
];

const Services = () => {
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
      {/* ================= HEADING ================= */}
      <div className="heading fadeUp">
        <h1 className="primaryText">Our Services.</h1>
        <h2 className="secondaryText">
          Industrial & Commercial Cleaning Solutions.
        </h2>
      </div>

      {/* ================= SERVICES ================= */}
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

      {/* ================= FEATURES ================= */}
      <div className="features fadeUp">
        <div className="featureItem">
          <ShieldCheck size={32} />
          <p>Commercial Cleaning</p>
        </div>

        <div className="featureItem">
          <Hammer size={32} />
          <p>Heavy Duty Work</p>
        </div>

        <div className="featureItem">
          <Droplets size={32} />
          <p>Deep Cleaning</p>
        </div>

        <div className="featureItem">
          <Sparkles size={32} />
          <p>Premium Finish</p>
        </div>
      </div>

      {/* ================= INFO ================= */}
      <div className="infoSection fadeUp">
        <div className="infoBlock">
          <h2>Complete Floor Care Solutions.</h2>
          <p>
            From deep scrubbing to high-gloss polishing, we provide complete
            solutions for maintaining and enhancing hard floor surfaces in
            commercial environments.
          </p>
        </div>

        <div className="infoBlock">
          <h2>Reliable & Professional Service.</h2>
          <p>
            Our trained professionals ensure consistent, high-quality results
            using industry-grade equipment and proven techniques.
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

      {/* ================= CONTACT ================= */}
      <div className="contactSection fadeUp">
        <div className="quoteBox">
          <h2>Request a Site Visit.</h2>
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

        <Footer />
      </div>
    </div>
  );
};

export default Services;
