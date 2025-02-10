import TeamWarrionIcon from "@/icons/TeamWarrion";
import TeamHackerIcon from "@/icons/TeamHacker";
import TeamSoldierIcon from "@/icons/TeamSoldier";
import TeamAssassinIcon from "@/icons/TeamAssassin";
import CupIcon from "@/icons/Cup";

import {
  Card,

} from "./ui/card";

const cards = [
  {
    year: "2005 - 2010",
    name: "champion cup",
    totalTeam: "Seventy Teams",
    organiger: "Germany Squad",
    teamName: "Wizard Wer",
    teamDegi: "Champions",
    icon: TeamWarrionIcon,
  },
  {
    year: "2021 - 2023",
    name: "world cup",
    totalTeam: "Fifty Teams",
    organiger: "Spain Legend",
    teamName: "Rabbits Star",
    teamDegi: "Game Changer",
    icon: TeamHackerIcon,
  },
  {
    year: "2020 - 2022",
    name: "Laliga Cup",
    totalTeam: "Ninety Teams",
    organiger: "Unite State",
    teamName: "Daotsu Counter",
    teamDegi: "Professional",
    icon: TeamSoldierIcon,
  },
  {
    year: "2004 - 2011",
    name: "Pular Game",
    totalTeam: "Eleven Teams",
    organiger: "Japan Limited",
    teamName: "Areal Cup",
    teamDegi: "Legend",
    icon: TeamAssassinIcon,
  },
];

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface CardPersonalizadoProps {
  year: string;
  name: string;
  totalTeam: string;
  organiger: string;
  teamName: string;
  teamDegi: string;
  icon: IconType;
}

const CardPersonalizado: React.FC<CardPersonalizadoProps> = ({
  year,
  name,
  totalTeam,
  organiger,
  teamName,
  teamDegi,
  icon: Icon,
}) => {
  return (
    <Card className=" flex-grap bg-[#020013] text-white border-none flex flex-col xl:flex-row items-center mb-[30px] gap-[25px] group">
      {/* Liga */}
      <div className="flex flex-col xl:flex-row  xl:justify-normal items-center ">
        <div className="flex justify-center xl:justify-start items-center bg-[#220874] group-hover:bg-[#f2003a] pt-[15px] xl:pl-[40px] pb-[20px] w-[350px] xl:w-[300px] xl:h-[120px] ">
          <div className=" flex  flex-col    ">
            <h2 className=" text-[26px] xl:text-[30px]">{year}</h2>
            <p className="text-[12px] uppercase tracking-[2px] md:flex md:justify-center ">{name}</p>
          </div>
        </div>
        <div className="
        w-0 h-0 
        border-t-[12px] border-t-[#220874] group-hover:border-t-[#f2003a]  xl:border-t-[20px] xl:border-t-transparent xl:group-hover:border-t-transparent 
        border-l-[24px] border-l-transparent xl:border-l-[12px] xl:border-[#220874] xl:group-hover:border-[#f2003a] 
        border-r-[24px] border-r-transparent xl:border-r-[0px] xl:border-r-none
        xl:border-b-[20px] xl:border-b-transparent xl:group-hover:border-b-transparent "></div>
      </div>
      <div className="relative lg:h-[120px] gap-4 w-[350px] lg:w-full flex justify-center flex-col lg:flex-row tracking-[1.5px] items-center ">
        {/* Organiger */}
        <div className=" text-[13px] lg:text-[16px] w-full h-[120px] lg:pl-[40px]  flex flex-col justify-center lg:items-start border-[3px] border-[#2f2c43] group-hover:border-[#f2003a] ">
          <div className="flex justify-center gap-3">
            <h3 className="text-gray-300">Total Team:</h3>
            <p className="uppercase">{totalTeam}</p>
          </div>
          <div className="flex justify-center  gap-3">
            <h3 className="text-gray-300">Organiger:</h3>
            <p className="uppercase">{organiger}</p>
          </div>
        </div>
        {/* Icono Cup */}
        <div className="absolute   ">
          <div className=" bg-[#2f2c43] group-hover:bg-[#f2003a] w-[60px] h-[60px] rounded-full flex justify-center items-center ">
            <CupIcon className="w-[29px] h-[29px]" />
          </div>
        </div>
        {/* Detail Team */}
        <div className="w-full h-[120px] flex flex-col-2 justify-center lg:justify-end pr-6 items-center border-[3px] border-[#2f2c43] group-hover:border-[#f2003a]">
          <div className="flex flex-col items-end pr-4  ">
            <h3 className="text-[20px] lg:text-[24px]">{teamName}</h3>
            <p className="text-[13px] lg:text-[16px]">{teamDegi}</p>
          </div>
          <div className="flex justify-center items-center">
            <Icon className="w-[59px] h-[73px]" />
          </div>
        </div>
      </div>
    </Card>
  );
};

const TournamentHistory = () => {
  return (
    <div className="container mx-[auto] ">
      <div className="pt-[120px] pb-[90px] px-[12px]">
        <div className="flex justify-center xl:justify-normal  ">
          <div className="uppercase text-white">
            <p className="flex justify-center xl:justify-normal text-[18px] -mt-[7px] mb-[27px]">
              Check out
            </p>
            <h2 className="text-[30px] md:text-[42px] xl:text-[60px] -mt-[20px] mb-[17px]">
              TOURNAMENT HISTORY
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[20px]">
          {cards.map((card, index) => (
            <CardPersonalizado
              key={index}
              year={card.year}
              name={card.name}
              totalTeam={card.totalTeam}
              organiger={card.organiger}
              teamName={card.teamName}
              teamDegi={card.teamDegi}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TournamentHistory;
