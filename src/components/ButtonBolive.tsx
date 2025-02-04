import { Button } from "./ui/button";

export const ButtonBolive = ({ label = "Download" }) => {
  return (
    <>
      <Button className="relative xl:px-[42px] px-[21px] xl:py-[30px] py-[15px] xl:text-[16px] text-[12px] bg-[#f2003a] uppercase z-20 hover:bg-[#d00030] group">
        {label}
        <div
          className="absolute w-[14px] h-[14px] bg-black right-[5px] bottom-[5px] -z-20 "
          style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
        ></div>
        <div className="absolute w-[6px] h-[6px] bg-black right-[5px] bottom-[5px] -z-10 transition-all ease-in-out duration-500 group-hover:w-[calc(100%-10px)] group-hover:h-[calc(100%-10px)]"></div>
      </Button>
    </>
  );
};
