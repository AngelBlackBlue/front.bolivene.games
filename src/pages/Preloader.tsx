import logoLoader from "@/assets/svg/logo-loader.svg";

const Preloader = () => {
  return (
    <div className="flex fixed inset-0 z-50">
      <div className="flex p-[50px] sm:bg-[radial-gradient(ellipse,_#220874,_hsl(200,30%,6%))] bg-[radial-gradient(circle,_#220874,_hsl(200,30%,6%))] h-full w-full    ">
        <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-max  ">
          <img src={logoLoader} alt="logo loader" className="mb-4" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
