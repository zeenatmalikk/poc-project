import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar/>
      <div className="flex">
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-[5rem] max-md:pb-14 sm:px-14 bg-light-1">
          <div className="w-full ">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
