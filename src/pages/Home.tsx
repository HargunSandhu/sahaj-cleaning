import "./styles/Home.css";
import floorSurfacing from "../assets/3mfloor-surfacing.png";
import floorPolishing from "../assets/floor-polishing.png";
import officeCleaning from "../assets/office-cleaning.png";

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
  return (
    <div className="main">
      <div className="heading">
        <h1 className="primaryText">Sahaj Group Pty Ltd.</h1>
        <h2 className="secondaryText">Trusted Cleaners - Australia.</h2>
      </div>

      <div className="sections">
        {sections.map((item, index) => (
          <div
            key={index}
            className={`section ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="sectionImage">
              <img
                src={item.img}
                alt={item.title}
                style={{ borderRadius: "15px" }}
              />
            </div>
            <div className="sectionText">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
