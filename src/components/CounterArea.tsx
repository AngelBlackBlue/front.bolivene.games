import ProTeamsIcon from "@/icons/ProTeams";
import SportsGamesIcon from "@/icons/SportsGames";
import TwitchIcon from "@/icons/Twitch";
import YouTubeIcon from "@/icons/YouTube";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface CardPersonalizadoProps {
  icon: IconType;
  title: string;
  description: string;
}

const cards = [
  { title: "Twitch Streams", description: "1300+", icon: TwitchIcon },
  { title: "YouTube Streams", description: "1M", icon: YouTubeIcon },
  { title: "Esports Games", description: "12k", icon: SportsGamesIcon },
  { title: "Pro Teams", description: "25k", icon: ProTeamsIcon },
];

const CardPersonalizado: React.FC<CardPersonalizadoProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <Card className="text-center uppercase  px-[30px] py-0 mb:py-[20px] mb-[0px] md:mb-[20px] flex flex-col bg-[#020013] items-center group hover:shadow-lg transition-shadow duration-300 border-none">
      <CardHeader className="absolute z-10 -mt-[25px] ml-[150px] ">
        <div className=" w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] flex justify-center items-center text-center rounded-full bg-[#f2003a] ] mb-7">
          <div className="flex justify-center items-center ">
            <Icon className="  text-white  w-[40px] h-[40px]  " />
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative flex justify-center items-center text-center">
        <div className="rounded-full border-white border-[1px] w-[200px] h-[200px] ] xl:w-[250px] xl:h-[250px] flex justify-center items-center ">
          <div className="rounded-full border-white border-[1px] w-[190px] h-[190px]  xl:w-[240px] xl:h-[240px] flex flex-col justify-center items-center ">
            <CardDescription className="-mt-2 text-[50px]  text-white">
              {description}
            </CardDescription>
            <CardTitle className=" -mt-2 text-[16px] text-white">
              {title}
            </CardTitle>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CounterArea = () => {
  return (
    <div className="container mx-[auto] ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {cards.map((card, index) => (
          <CardPersonalizado
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CounterArea;
