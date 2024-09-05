import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <div key={item.label}>
              <Link
                to={item.route}
                className={cn(
                  'flex gap-4 items-center p-3 rounded-lg justify-start',
                  {
                    'bg-blue-1': isActive,
                  }
                )}
              >
                <img
                  src={item.imgURL}
                  alt={item.label}
                  width={24}
                  height={24}
                />
                <p className="text-lg font-semibold max-lg:hidden">
                  {item.label}
                </p>
              </Link>

              {/* Render sublinks if they exist */}
              {item.sublinks && (
                <div className="ml-6 mt-2">
                  {item.sublinks.map((subItem) => (
                    <Link
                      key={subItem.route}
                      to={subItem.route}
                      className={cn(
                        'flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-blue-2',
                        { 'bg-blue-3': pathname === subItem.route }
                      )}
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
      </div>
    </section>
  );
};

export default Sidebar;
