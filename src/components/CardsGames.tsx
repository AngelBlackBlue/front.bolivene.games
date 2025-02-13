import iconGame from "@/assets/img/icon_game.png";
import React from "react";
import { Card } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import ChevrontRightIcon from "@/icons/ChevronRight";
import { Button } from "./ui/button";
import AppleIcon from "@/icons/Apple";
import GooglePlayStoreIcon from "@/icons/GooglePlayStore";
import ApkIcon from "@/icons/Apk";

interface CardGameProps {
  image: string;
  game: string;
  red: string;
  linkFacebook: string;
  description: string;
  appStore: string;
  googlePlay: string;
  apk: string;
  lenguage: string;
}

const cards = [
  {
    image: iconGame,
    game: "Path of Destiny: Fantasy MMO",
    red: "MMORPG",
    linkFacebook: "https://www.facebook.com/pathofdestinygame",
    description:
      "Immerse yourself in the vibrant universe of Path of Destiny, a massively multiplayer online RPG(MMORPG) that wil transport you to a world full of action, strategy and fantasy.",
    appStore: "https://www.facebook.com/pathofdestinygame",
    googlePlay: "https://www.facebook.com/pathofdestinygame",
    apk: "https://www.facebook.com/pathofdestinygame",
    lenguage: "https://www.facebook.com/pathofdestinygame",
  },
  {
    image: iconGame,
    game: "Mrage: Perfect Skyline",
    red: "MMORPG",
    linkFacebook: "https://www.facebook.com/pathofdestinygame",
    description:
      "Immerse yourself in the vibrant universe of Path of Destiny, a massively multiplayer online RPG(MMORPG) that wil transport you to a world full of action, strategy and fantasy.",
    appStore: "https://www.facebook.com/pathofdestinygame",
    googlePlay: "https://www.facebook.com/pathofdestinygame",
    apk: "https://www.facebook.com/pathofdestinygame",
    lenguage: "https://www.facebook.com/pathofdestinygame",
  },
  {
    image: iconGame,
    game: "Tamashi: Rise of Yokai",
    red: "MMORPG",
    linkFacebook: "https://www.facebook.com/pathofdestinygame",
    description:
      "Immerse yourself in the vibrant universe of Path of Destiny, a massively multiplayer online RPG(MMORPG) that wil transport you to a world full of action, strategy and fantasy.",
    appStore: "https://www.facebook.com/pathofdestinygame",
    googlePlay: "https://www.facebook.com/pathofdestinygame",
    apk: "https://www.facebook.com/pathofdestinygame",
    lenguage: "https://www.facebook.com/pathofdestinygame",
  },
  {
    image: iconGame,
    game: "Monster Saga: Evolution",
    red: "MMORPG",
    linkFacebook: "https://www.facebook.com/pathofdestinygame",
    description:
      "Immerse yourself in the vibrant universe of Path of Destiny, a massively multiplayer online RPG(MMORPG) that wil transport you to a world full of action, strategy and fantasy.",
    appStore: "https://www.facebook.com/pathofdestinygame",
    googlePlay: "https://www.facebook.com/pathofdestinygame",
    apk: "https://www.facebook.com/pathofdestinygame",
    lenguage: "Spanish",
  },
];

const CardGame: React.FC<CardGameProps> = ({
  image,
  game,
  red,
  linkFacebook,
  description,
  appStore,
  googlePlay,
  apk,
}) => {
  return (
    <Card className="text-white bg-transparent border-transparent">
      <div className="bg-[#39009D] rounded-xl p-4 md:p-8 gap-2 md:gap-6">
        <div className=" flex justify-start gap-2 md:gap-6">
          {/* image */}

          <img
            src={image}
            alt="icono"
            className="rounded-2xl size-[80px]  sm:size-[120px]"
          />

          {/* game   */}
          <div>
            <h2 className="text-[18px] md:text-[20px]">{game}</h2>

            {/* badge */}
            <div className="flex justify-start gap-3 pt-2 ">
              <Badge className="rounded-none bg-[#2C2841] hover:bg-[#f2003a] text-[12px] sm:text-[14px]">
                {red}
              </Badge>
              <a href={linkFacebook} className="hover:no-underline">
                <Badge className="rounded-none bg-[#0465FF] hover:bg-[#f2003a] text-[12px] sm:text-[14px]">
                  Facebook
                  <ChevrontRightIcon className="w-5 h-5" />
                </Badge>
              </a>
            </div>
            {/* description */}

            <div className="text-gray-300 text-[12px] sm:text-[14px] w-[260px] sm:max-w-[400px] pt-2 xl:w-[600px]">
              {description}
            </div>
            {/* Buttons */}
            <div className="flex justify-start pt-4 gap-2">
              <a href={appStore}>
                <Button className="rounded-[6px] h-[30px] bg-black hover:bg-[#f2003a] text-[10px] xl:text-[14px] px-2 sm:px-4">
                  <AppleIcon fill="white" />
                  App Store
                </Button>
              </a>
              <a href={googlePlay}>
                <Button className="rounded-[6px] h-[30px] bg-[#02ADF3] hover:bg-[#f2003a] text-[10px] xl:text-[14px] px-2 sm:px-4">
                  <GooglePlayStoreIcon className="h-8" fill="white" />
                  Google Play
                </Button>
              </a>
              <a href={apk}>
                <Button className="rounded-[6px] h-[30px] bg-[#01C324] hover:bg-[#f2003a] text-[10px] xl:text-[14px] px-2 sm:px-4">
                  <ApkIcon className="h-6" fill="white" />
                  Apk
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const CardsGames = () => {
  return (
    <div className="container mx-[auto] py-9  flex justify-center   ">
      <div className="grid grid-col-1 lg:grid-cols-2 gap-6 ">
        {cards.map((card, idex) => (
          <CardGame key={idex} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardsGames;
