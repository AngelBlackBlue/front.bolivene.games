import useCardsGames from "@/hooks/useCardsGames";

import ChevrontRightIcon from "@/icons/ChevronRight";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import AppleIcon from "@/icons/Apple";
import GooglePlayStoreIcon from "@/icons/GooglePlayStore";
import ApkIcon from "@/icons/Apk";

interface CardDetailBannerProps {
  gameId: string;
}

const CardGameWithQR: React.FC<CardDetailBannerProps> = ({ gameId }) => {
  const { cards } = useCardsGames();
  const card = cards.find((card) => card.id === gameId);

  return (
    <div className="container mx-auto px-4 sm:px-0 ">
      <div className="bg-[#39009D] rounded-xl px-4 py-6 lg:px-12 gap-2 md:gap-6 mt-10 lg:mx-10">
        <div className="flex justify-start gap-4 md:gap-8">
          <img
            src={card?.image}
            alt="image"
            className="rounded-2xl size-28 md:size-32 lg:size-44 xl:size-52 "
          />

          {/* CENTER */}
          <div>
            {/* Title */}
            <div className="flex justify-start flex-col xl:flex-row gap-2 ">
              <h2 className=" text-[20px] sm:text-[18px] md:text-[26px] lg:text-[30px] md:-mt-3">
                {card?.game}
              </h2>

              <div className="flex flex-row gap-2 pt-3 sm:pt-0">
                <div>
                  <Badge className="rounded-none bg-[#2C2841] hover:bg-[#f2003a] text-[12px] sm:text-[14px]">
                    {card?.red}
                  </Badge>
                </div>
                <a href={card?.linkFacebook} className="hover:no-underline">
                  <Badge className="rounded-none bg-[#0465FF] hover:bg-[#f2003a] text-[12px] sm:text-[14px]">
                    Facebook
                    <ChevrontRightIcon className="w-5 h-5" />
                  </Badge>
                </a>
              </div>
            </div>
            {/* Description */}
            <div className="hidden sm:block">
              <div className="text-gray-300 pt-6 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px]">
                {card?.description}
              </div>

              <div className="flex justify-start pt-6 gap-4">
                <a href={card?.appStore}>
                  <Button className="rounded-[6px] h-[30px] lg:h-[40px] bg-black hover:bg-[#f2003a] text-[12px]  md:text-[14px] lg:text-[16px] xl:text-[20px] px-10 sm:px-4">
                    <AppleIcon className="h-8" fill="white" />
                    App Store
                  </Button>
                </a>
                <a href={card?.googlePlay}>
                  <Button className="rounded-[6px] h-[30px] lg:h-[40px] bg-[#02ADF3] hover:bg-[#f2003a] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] px-2 sm:px-4">
                    <GooglePlayStoreIcon className="h-8" fill="white" />
                    Google Play
                  </Button>
                </a>
                <a href={card?.apk}>
                  <Button className="rounded-[6px] h-[30px] lg:h-[40px] bg-[#01C324] hover:bg-[#f2003a] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] px-2 sm:px-4">
                    <ApkIcon className="h-8" fill="white" />
                    Apk
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <img
            src={card?.qr}
            alt="image"
            className="hidden sm:block size-28 md:size-32 lg:size-44 xl:size-52"
          />
        </div>
        {/* Movil */}
        <div className="sm:hidden ">
          <div className="text-gray-300 pt-6 text-[16px] ">
            {card?.description}
          </div>
          <div className="flex justify-center pt-6 gap-4">
            <a href={card?.appStore}>
              <Button className="rounded-[6px] h-[30px]  bg-black hover:bg-[#f2003a] text-[12px] px-2">
                <AppleIcon className="h-8" fill="white" />
                App Store
              </Button>
            </a>
            <a href={card?.googlePlay}>
              <Button className="rounded-[6px] h-[30px] bg-[#02ADF3] hover:bg-[#f2003a] text-[12px]  px-2 ">
                <GooglePlayStoreIcon className="h-8" fill="white" />
                Google Play
              </Button>
            </a>
            <a href={card?.apk}>
              <Button className="rounded-[6px] h-[30px] bg-[#01C324] hover:bg-[#f2003a] text-[12px]  px-2">
                <ApkIcon className="h-8" fill="white" />
                Apk
              </Button>
            </a>
          </div>
          <div className="flex justify-center ">
            <img src={card?.qr} alt="image" className="w-52  pt-8 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGameWithQR;
