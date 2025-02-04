import footer from "@/assets/img/bg/footer-bg-1-1.jpg";
import logo2 from "@/assets/svg/logo-2.svg";
import FacebookIcon from "@/icons/Facebook";
import GooglePlayStoreIcon from "@/icons/GooglePlayStore";
import { CopyrightIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className=" bg-black smpt-[120px]">
    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${footer})` }}>
      <div className="pt-[80px] pb-[20px] flex justify-center  ">
        <div className="container">
          <div className="flex justify-center ">
            <div className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12">
              <div className="mb-[40px]">
                <div className="mb-[18px] flex justify-center">
                  <a href="/" aria-label="Ir a la página de inicio">
                    <img src={logo2} alt="logo" />
                  </a>
                </div>
                <p className="sm:text-[20px] text-[16px] max-w-[550px] mx-auto mb-5 flex justify-center text-center">
                  Redefining mobile gaming with accessible and immersive
                  experiences. Where innovation meets entertainment, for players
                  everywhere.
                </p>
                <div className="flex flex-row justify-center gap-2">
                  <a href="https://web.facebook.com/pathofdestinygame">
                    <div className="size-[68px] flex items-center justify-center border-[2px] text-white/60 rounded-full hover:bg-[#f2003a] hover:border-[#f2003a] transition duration-300">
                      <FacebookIcon className="w-5 text-white pl-1" />
                    </div>
                  </a>
                  <a href="https://play.google.com/store/apps/developer?id=BoliVene+-+Fantasy++RPG+Games&hl=en">
                    <div className="size-[68px] flex items-center justify-center border-[2px] text-white/60 rounded-full hover:bg-[#f2003a] hover:border-[#f2003a] transition duration-300">
                      <GooglePlayStoreIcon className="w-5 text-white " />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[20px] flex justify-center">
        <div className="container">
          <p className="pb-[67px] flex flex-row gap-1 justify-center sm:text-[16ps] text-[14px] ">
            Copyright <CopyrightIcon className="size-5" /> 2024
            <a
              href="/"
              className="flex flex-row hover:text-[#f2003a] uppercase"
            >
              Bolivene <span className="text-white">.</span>
            </a>
            All Rights Reserved By
            <a
              href="https://sinag.online"
              className="hover:text-[#f2003a] uppercase"
            >
              SINAG
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
