import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import logo from "../assets/icons/person.png";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link to="/" className="flex items-center gap-1">
        <img
          src={logo}
          width={32}
          height={32}
          alt="logo"
          className="max-sm:size-10"
        />
        <p className="text-[20px] font-extrabold text-white max-sm:hidden">
          Students POC
        </p>
      </Link>
      <div className="flex-between gap-5">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
