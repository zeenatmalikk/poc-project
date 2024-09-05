import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import MobileNav from "./MobileNav";
import logo from "../assets/icons/person.png";
import { sidebarLinks } from "@/constants"; // Import sidebarLinks
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const { pathname } = useLocation();
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubMenuClick = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

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
      <div className="hidden lg:flex items-center gap-5 relative">
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          const hasSublinks = item.sublinks && item.sublinks.length > 0;

          return (
            <div key={item.label} className="relative group">
              <div
                className={`flex gap-2 items-center py-2 px-6 rounded-lg ${
                  isActive ? "bg-blue-1" : ""
                }`}
                onClick={() => hasSublinks && handleSubMenuClick(item.label)}
              >
                <Link to={item.route} className="flex items-center gap-2">
                  <img
                    src={item.imgURL}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
                  <p className="text-md font-semibold text-white flex items-center gap-1">
                    {item.label}
                  {item.sublinks ? <ChevronDownIcon height={14} color="white"/> : ""}
                  </p>
                </Link>
              </div>

              {hasSublinks && openSubMenu === item.label && (
                <div className="absolute left-0 top-full mt-2 bg-dark-1 text-white rounded-lg shadow-lg z-10">
                  {item.sublinks.map((subItem) => (
                    <Link
                      key={subItem.route}
                      to={subItem.route}
                      className={`flex items-center hover:bg-dark-2  gap-2 px-4 py-2 hover:bg-blue-2 ${
                        pathname === subItem.route ? "bg-blue-3" : ""
                      }`}
                    >
                      <img
                        src={subItem.imgURL}
                        alt={subItem.label}
                        width={20}
                        height={20}
                      />
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex lg:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
