import { Link } from "react-router-dom";
import { socialLinks } from "../constants";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

  if (location.pathname !== "/")
    return (
      <>
        <hr className="border-slate-200 my-10" />
        <div className="flex items-center justify-between pb-5 xl:px-36 px-16">
          <div className="text-xs text-slate-400">Gabriel C. Moris 2023</div>
          <div className=" flex gap-5">
            {socialLinks.map((link) => {
              return (
                <Link to={link.link}>
                  <img src={link.iconUrl} className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </>
    );
};
