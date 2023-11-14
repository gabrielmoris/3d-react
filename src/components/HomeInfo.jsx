import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const HomeInfo = ({ currentStage }) => {
  const renderContent = {
    1: (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hello, world! I'm <span className="font-semibold">Gabriel C. Moris</span>
        <br />A Software Engineer.
      </h1>
    ),
    2: (
      <InfoBox
        text={"A passionate frontend developer always doing my best to follow the DRY principle and write clean and reusable code."}
        link="/about"
        btnText={"Learn More"}
      />
    ),
    3: (
      <InfoBox
        text={
          "I've done remote projects for companies, and collaborated with talented people to create digital products for both business and consumer use. "
        }
        link="/projects"
        btnText={"Visit my portfolio"}
      />
    ),
    4: <InfoBox text={"Are you looking for a developer?"} link="/contact" btnText={"Contact me"} />,
  };

  return renderContent[currentStage] || null;
};

export default HomeInfo;
