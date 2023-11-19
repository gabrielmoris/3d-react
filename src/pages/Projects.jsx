import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { CTA } from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My<span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>
      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          Throughout my career, I've been entrusted by private clients to transform their visions into reality, consistently delivering top-tier
          projects characterized by impeccable quality, robust code maintainability, and an unwavering commitment to exceeding expectations. Each
          project I undertake is not just a deliverable but a testament to my dedication to crafting innovative solutions that drive success and
          satisfaction for clients.
        </p>
      </div>
      <div className="flex flex-wrap my-10 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={project.iconUrl} alt="Project Icon" className="w-[80%] h-[80%] rounded-lg object-contain" />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              {project.link && (
                <div className="mt-5 flex items-center gap-2 font-poppins ">
                  <Link to={project.link} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600">
                    Live Link
                  </Link>
                  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </div>
              )}
              {project.linkAndroid && (
                <div className="mt-5 flex items-center gap-2 font-poppins ">
                  <Link to={project.linkAndroid} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600">
                    Android Link
                  </Link>
                  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </div>
              )}
              {project.linkIOS && (
                <div className="mt-5 flex items-center gap-2 font-poppins ">
                  <Link to={project.linkIOS} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600">
                    IOS Link
                  </Link>
                  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </div>
              )}
              {project.linkGithub && (
                <div className="mt-5 flex items-center gap-2 font-poppins ">
                  <Link to={project.linkGithub} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600">
                    Github Link
                  </Link>
                  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
