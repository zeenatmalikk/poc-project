import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "../constants/index";
import hamburger from "../assets/icons/hamburger.svg";
import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <img
            src={hamburger}
            width={36}
            height={36}
            alt="hamburger icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="right" className="border-none bg-dark-1">
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild resource={'none'}>
              

            <section className="flex h-full flex-col gap-3 pt-16 text-white">
              {sidebarLinks.map((item) => {
                const isActive =
                  pathname === item.route ||
                  pathname.startsWith(`${item.route}/`);

                return (
                  
                  <div key={item.label}>
                    <Link
                      to={item.route}
                      className={`flex gap-4 items-center p-4 rounded-lg w-full max-w-60 ${
                        isActive ? "bg-blue-1" : ""
                      }`}
                    >
                      <img
                        src={item.imgURL}
                        alt={item.label}
                        width={20}
                        height={20}
                      />
                      <p className="font-semibold">{item.label}</p>
                    </Link>

                    {/* Render sublinks if they exist */}
                    {item.sublinks && (
                      <div className="ml-6 mt-2">
                        {item.sublinks.map((subItem) => (
                          <Link
                            key={subItem.route}
                            to={subItem.route}
                            className=" px-4 py-2 flex gap-2 hover:bg-gray-700"
                          >
                            <img
                              src={subItem.imgURL}
                              alt={item.label}
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
            </section>
            </SheetClose>

          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
