import { useEffect } from "react";
import "./styles/ContactUs.css";
import Footer from "../components/Footer";

const ContactUs = () => {
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
      {
        threshold: 0.15,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main">
      {/* HEADING */}
      <div className="heading fadeUp">
        <h1 className="primaryText">Contact Us.</h1>
        <p className="secondaryText">Get in touch for a quote.</p>
      </div>

      {/* CONTACT SECTION */}
      <div className="contactSection">
        {/* QUOTE */}
        <div className="quoteBox fadeUp">
          <h2>Ready to talk?</h2>
          <p>Reach out to our team for a custom quote or any inquiries.</p>
          <button className="quoteBtn">Get a Quote</button>
        </div>

        {/* FORM */}
        <form className="contactForm fadeUp">
          <div className="row">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>

          <textarea placeholder="Your message..." rows={5}></textarea>

          <button className="submitBtn">Contact Form</button>
        </form>

        {/* FOOTER INFO */}
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
