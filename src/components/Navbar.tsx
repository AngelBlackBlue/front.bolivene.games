// import {
//   NavigationMenu,
//   // NavigationMenuContent,
//   // NavigationMenuIndicator,
//   NavigationMenuItem,
//   // NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   // NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";

import MenuIcon from "@/icons/Menu";

import logo from "@/assets/svg/logo.svg";

import {
  Sheet,
  SheetClose,

  // SheetClose,
  SheetContent,
  // SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAuth0 } from "@auth0/auth0-react";

import { ButtonLoginAuth0 } from "./ButtonLoginAuth0";
import { ButtonRegisterAuth0 } from "./ButtonRegisterAuth0";
import { ButtonLogoutAuth0 } from "./ButtonLogoutAuth0";
import { ButtonProfileAuth0 } from "./ButtonProfileAuth0";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import Lenguage from "./Lenguage";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className=" items-center w-full ">
      <div className="hidden md:flex justify-between ">
        <nav className=" flex lg:pl-[60px]  w-full h-32 text-lg bg-[#020013] transition-none hover:bg-none ">
          {/* Web */}

          <div className="flex items-center justify-center">
            <Button
              className="uppercase px-2 lg:px-4 text-white transition-colors hover:text-[#f2003a] border-none bg-[#020013] hover:bg-[#020013] "
              onClick={() => navigate("/")}
            >
              {t("home")}
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <Button
              className="uppercase px-2 lg:px-4 text-white transition-colors hover:text-[#f2003a] border-none bg-[#020013] hover:bg-[#020013] "
              onClick={() => navigate("/aboutUs")}
            >
              {t("about")}
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <Button
              className="uppercase px-2 lg:px-4 text-white transition-colors hover:text-[#f2003a] border-none bg-[#020013] hover:bg-[#020013] group"
              onClick={() => navigate("/games")}
            >
              {t("games")}
            </Button>
          </div>

          {/* CONTACT */}
          <div className="flex items-center justify-center">
            <Button
              className="uppercase px-2 lg:px-4 text-white transition-colors hover:text-[#f2003a] border-none bg-[#020013] hover:bg-[#020013] group"
             
            >
             { t("contact")}
            </Button>
          </div>

          {/* LENGUAGES */}
          <div className="flex items-center pl-2 ">{<Lenguage />}</div>
        </nav>

        <div className="flex justify-center items-center gap-4 ">
          {isAuthenticated && (
            <>
              <ButtonLogoutAuth0 />
              <ButtonProfileAuth0 />
            </>
          )}
          {!isAuthenticated && (
            <>
              <ButtonLoginAuth0 />
              <ButtonRegisterAuth0 />
            </>
          )}
        </div>
      </div>
      {/* movil */}
      <div className="md:hidden text-white flex justify-end items-center pr-1  ">
        <Sheet key="side:left">
          <SheetTrigger>
            <MenuIcon className="bg-[#f2003a] size-14  p-3" />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[310px] bg-[#020013] p-4 border-r-4 border-[#f2003a]"
          >
            <SheetHeader>
              <SheetTitle>
                <img src={logo} alt="logo bolivene" />
              </SheetTitle>
              <div className="flex justify-center items-center gap-4 p-4 ">
                {isAuthenticated && (
                  <>
                    <ButtonLogoutAuth0 />

                    <ButtonProfileAuth0 />
                  </>
                )}
                {!isAuthenticated && (
                  <>
                    <ButtonLoginAuth0 />
                    <ButtonRegisterAuth0 />
                  </>
                )}
              </div>
              {/* Movil */}
            </SheetHeader>
            <Accordion type="single" collapsible className="w-full px-6 text-4">
              <AccordionItem value="item-1">
                <SheetClose asChild>
                  <AccordionTrigger onClick={() => navigate("/")}>
                    {t("home")}
                  </AccordionTrigger>
                </SheetClose>
              </AccordionItem>
              <AccordionItem value="item-2">
                <SheetClose asChild>
                  <AccordionTrigger onClick={() => navigate("/aboutUs")}>
                    {t("about")}
                  </AccordionTrigger>
                </SheetClose>
              </AccordionItem>
              <AccordionItem value="item-3">
                <SheetClose asChild>
                  <AccordionTrigger onClick={() => navigate("/games")}>
                    {t("games")}
                  </AccordionTrigger>
                </SheetClose>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>{t("contact")}</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
     
                  <AccordionTrigger>Lenguage</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col">
                      <div>Ingles</div>
                      Chino 
                      Argentino
                      Brasilero
                      </div>

             
                  </AccordionContent>

              </AccordionItem>
            </Accordion>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
