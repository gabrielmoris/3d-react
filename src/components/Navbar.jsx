import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">GCM</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-400")}>
          <p className="">About</p>
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-400")}>
          <p className="">Projects</p>
        </NavLink>
        <div className="hidden md:block">
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-400")}>
            <p className="">Contact</p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
