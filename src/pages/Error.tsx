import { ButtonBolivene } from "../components/ButtonBolivene";
const Error = () => {
  return (
    <>
      <section className="relative z-10 bg-[#DDDDDD] pt-[120px] pb-[90px] px-10 ">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4 bg-[#2c2c2c] py-10">
              <div className="mx-auto  text-center sm:px-[40px]">
                <h2 className="mb-2 text-[50px]  text-white sm:text-[80px] md:text-[180px]">
                  4{" "}
                  <span className="text-[#f2003a] text-[77px] sm:text-[154px] md:text-[252px]">
                    0
                  </span>{" "}
                  4
                </h2>
                <h4 className="mb-3 text-[26px] text-white">
                  OOOPS, PAGE NOT FOUND
                </h4>
                <p className="mb-8 text-[14px] md:text-[20px] text-white">
                  We Can't Seem to find the page you're looking for.
                </p>
                <div className="pb-10">

                <ButtonBolivene label="Back to HomePage" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="flex h-full w-1/3">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div> */}
      </section>
    </>
  );
};

export default Error;
