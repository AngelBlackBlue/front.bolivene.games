import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import EsportsTeamsIcon from "@/icons/EsportsTeams";
import TeamAssassinIcon from "@/icons/TeamAssassin";
import TeamGangsterIcon from "@/icons/TeamGangster";
import TeamMashGamerIcon from "@/icons/TeamMashGamer";
import TeamSoldierIcon from "@/icons/TeamSoldier";
import avater from "@/assets/img/avater.webp";
import { Button } from "./ui/button";
import { useState } from "react";
import { SVGProps } from "react";


interface TeamMember {
  id: number;
  name: string;
  image: string;
}

interface TeamInfo {
  wins: string;
  loses: string;
  draws: string;
}

interface TeamCard {
  id: number;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  avaters: TeamMember[];
  teamInfo: TeamInfo[];
  linkMoreInfo: string;
}


const TeamAreaAboutUs= () => {
  const cards: TeamCard[]  = [
    {
      id: 1,
      icon: TeamSoldierIcon,
      name: "Rabbits Star",
      avaters: [
        { id: 1, name: "Rabbits Star", image: avater },
        { id: 2, name: "Rabbits Star", image: avater },
        { id: 3, name: "Rabbits Star", image: avater },
        { id: 4, name: "Rabbits Star", image: avater },
        { id: 5, name: "Rabbits Star", image: avater },
      ],
      teamInfo: [{ wins: "13", loses: "17", draws: "19" }],
      linkMoreInfo: "",
    },
    {
      id: 2,
      icon: TeamAssassinIcon,
      name: "Daotsu Counter",
      avaters: [
        { id: 1, name: "Rabbits Star", image: avater },
        { id: 2, name: "Rabbits Star", image: avater },
        { id: 3, name: "Rabbits Star", image: avater },
        { id: 4, name: "Rabbits Star", image: avater },
      ],
      teamInfo: [{ wins: "11", loses: "22", draws: "15" }],
      linkMoreInfo: "",
    },
    {
      id: 3,
      icon: TeamMashGamerIcon,
      name: "Asia Pacific",
      avaters: [
        { id: 1, name: "Rabbits Star", image: avater },
        { id: 2, name: "Rabbits Star", image: avater },
        { id: 3, name: "Rabbits Star", image: avater },
        { id: 4, name: "Rabbits Star", image: avater },
        { id: 5, name: "Rabbits Star", image: avater },
        { id: 6, name: "Rabbits Star", image: avater },
        { id: 7, name: "Rabbits Star", image: avater },
      ],
      teamInfo: [{ wins: "09", loses: "45", draws: "63" }],
      linkMoreInfo: "",
    },
    {
      id: 4,
      icon: TeamGangsterIcon,
      name: "Wizard Wer",
      avaters: [
        { id: 1, name: "Rabbits Star", image: avater },
        { id: 2, name: "Rabbits Star", image: avater },
        { id: 3, name: "Rabbits Star", image: avater },
        { id: 4, name: "Rabbits Star", image: avater },
        { id: 5, name: "Rabbits Star", image: avater },
      ],
      teamInfo: [{ wins: "45", loses: "11", draws: "08" }],
      linkMoreInfo: "hola",
    },
  ];

  const [showButton, setShowButton] = useState<{ [key: number]: boolean }>({});

  const handleMouseEnter = (cardId: number) => {
    setShowButton((prev) => ({ ...prev, [cardId]: true }));
  };
  
  const handleMouseLeave = (cardId: number) => {
    setShowButton((prev) => ({ ...prev, [cardId]: false }));
  };
  return (
    <div className="container mx-auto px-4  pt-[80px] pb-[40px] md:pt-[120px] md:pb-[90px] ">
      <div className="text-center text-white mb-9">
        <div className="-mt-1 mb-7">
          <span className="text-[18px]">OUR MATCHES</span>
        </div>
        <h2 className="text-[42px] -mt-3 mb-4">ESPORTS TEAMS</h2>
        <div className="flex justify-center">
          <EsportsTeamsIcon className="w-40 h-6 mb-3" />
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {cards.map((card) => (
            <CarouselItem key={card.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2 ">
                <div
                  onMouseEnter={() => handleMouseEnter(card.id)}
                  onMouseLeave={() => handleMouseLeave(card.id)}
                >
                  <Card className="text-center bg-[#220874] border-none text-white mb-20 relative 
                shadow-[inset_0_0_0_4px_#220874] hover:shadow-[inset_0_0_0_4px_#f2003a]">
                    <CardHeader className="pt-16 ">
                      <div className="flex justify-center mb-[22px] ">
                        <div className="flip-card ">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <card.icon className="w-[145px] h-[160px]" />
                            </div>
                            <div className="flip-card-back">
                              <card.icon className="w-[145px] h-[160px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="uppercase text-center pb-5 mt-0">
                        {card.name}
                      </CardTitle>
                      <CardDescription className="flex items-center justify-center gap-1">
                        {Array.isArray(card.avaters) &&
                          card.avaters.slice(0, 4).map((avater) => (
                            <div key={avater.id}>
                              <img
                                className="w-[40px] h-[40px] rounded-full"
                                src={avater.image}
                                alt={avater.name}
                              />
                            </div>
                          ))}
                        {card.avaters.length > 4 && (
                          <div className="flex items-center justify-center w-10 h-10 text-white text-sm mx-0">
                            + {card.avaters.length - 4}
                          </div>
                        )}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="border-t-[1px] border-dotted border-gray-500 p-0">
                      {Array.isArray(card.teamInfo) &&
                        card.teamInfo.map((info, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-3 gap-2 justify-center"
                          >
                            <div className="uppercase flex flex-col items-center">
                              <span className="text-[32px] pt-4">
                                {info.wins}
                              </span>
                              <span className="pb-6">wins</span>
                            </div>
                            <div className="uppercase pt-4 flex flex-col items-center border-x-[1px] border-dotted border-gray-500">
                              <span className="text-[32px]">{info.loses}</span>
                              <span className="pb-6">loses</span>
                            </div>
                            <div className="uppercase pt-4 flex flex-col items-center">
                              <span className="text-[32px]">{info.draws}</span>
                              <span className="pb-6">draws</span>
                            </div>
                          </div>
                        ))}
                    </CardContent>
                    <CardFooter className="absolute w-full px-0  bg-[#020013] border-[#f2003a]  ">
                      {showButton[card.id]  && (
                        <Button
                          className="relative w-full py-[30px] text-[16px] bg-[#f2003a] uppercase z-20 hover:bg-[#f2003a] group"
                          onClick={() => {
                            window.alert("hello")
                          }
                          }
                        >
                             more Information
                          <div
                            className="absolute w-[14px] h-[14px] bg-black right-[5px] bottom-[5px] -z-20"
                            style={{
                              clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
                            }}
                          ></div>
                          <div className="absolute w-[6px] h-[6px] bg-black right-[5px] bottom-[5px] -z-10 transition-all ease-in-out duration-500 group-hover:w-[calc(100%-10px)] group-hover:h-[calc(100%-10px)]"></div>
                        </Button>
                      )}

                    </CardFooter>
                  </Card>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TeamAreaAboutUs