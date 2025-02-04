import { Navbar } from "@/components/Navbar";
import logo from "@/assets/svg/logo.svg";

export const Header = () => {
  return (
    <header className="flex items-center md:mx-14 px-3 ">
      <div className="py-4 pr-7 md:w-72">
        <a href="/" aria-label="Ir a la página de inicio">
          <img src={logo} alt="logo bolivene" className="" />
        </a>
      </div>
      <Navbar />
    </header>
  );
};
