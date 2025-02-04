import { useEffect, useState } from "react";
import ArrowUpIcon from "@/icons/ArrowUp";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 50; // Ajusta la velocidad
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10); // Ajusta el tiempo de cada paso
  };

  if (!isVisible) return null; // No renderiza el botón si no es visible

  return (
    <button
      onClick={scrollToTop}
      className={`fixed md:bottom-14 md:right-14 sm:bottom-7 sm:right-7 bottom-3 right-3 bg-[#f2003a] text-white   p-3 rounded-full z-30 border-[6px] border-black flex items-center justify-center w-16 h-16   hover:bg-[#220874]
         ${
           isVisible
             ? "opacity-100 translate-y-0 scale-100 transition-all duration-1000 ease-in-out"
             : "opacity-0 translate-y-[500px] scale-75 transition-all duration-1000 ease-in-out bg-[#220874] "
         }`}
    >
      <ArrowUpIcon className="size-4" />
    </button>
  );
};

export default ScrollToTop;
