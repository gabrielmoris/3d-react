import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import HomeInfo from "../components/HomeInfo.jsx";
import { Footer } from "./Footer.jsx";

export const ScrollInfo = () => {
  return (
    <section className="flex flex-col gap-28 items-center p-1 xl:p-20 bg-gradient-to-b to-purple-900 from-slate-900">
      <h1 className="head-text text-slate-500 mt-10 md:mt-0">
        {"<"}
        <span className="blue-gradient_text font-semibold drop-shadow"> Gabrielcmoris </span>
        {"/>"}
      </h1>
      <div className="animate-slide-in-from-right">
        <HomeInfo currentStage={2} />
      </div>
      <div className="animate-slide-in-from-right">
        <HomeInfo currentStage={3} />
      </div>
      <div className="animate-slide-in-from-right">
        <HomeInfo currentStage={4} />
      </div>
      <div className="mb-20"></div>
      <Footer className={"relative w-screen md:w-full translate-y-20"} />
    </section>
  );
};
