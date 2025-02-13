import game from "@/assets/img/bg/cta-bg-2-1.jpg";
import ButtonPlayStore from "@/components/ButtonPlayStore";
import { useTranslation } from "react-i18next";

export default function CallToAction() {
  const { t } = useTranslation();
  return (
    <div className=" text-white ">
      <div className=" sm:relative mb-[24px]  pb-[8px] ">
        <img src={game} alt="Path of Destiny" />
        {/* contenido de la imagen */}
        <div className="sm:absolute top-0 left-0 xl:py-[25px] lg:py-[0px] pt-[20px] md:py-[12px]  md:pl-[100px] px-[10px]  ">
          <h2 className="capitalize flex flex-row md:flex-col justify-start lg:text-[46px] md:text-[45px}] sm:text-[25px] text-[20px] xl:mb-[10px] sm:my-0 my-0  ">
            {t("ourFeaturedGame")}
            <div>Path of Destiny</div>
          </h2>
          <p className="first-letter:capitalize text-[14px] md:text-[16px]  mb-[15px] xl:mb-[30px]  md:w-[550px]">
            {t("ourFeaturedGameText")}
          </p>
          <ButtonPlayStore />
        </div>
      </div>
    </div>
  );
}
