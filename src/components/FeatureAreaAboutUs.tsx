import GamesInnovationIcon from "@/icons/GamesInnovation";
import CyberSecurityIcon from "@/icons/CyberSecurity";
import SafeEnvironmentIcon from "@/icons/SafeEnvironment";
import ProfessionalPlayerIcon from "./ProfessionalPlayer";


import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"; 


type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;


interface CardPersonalizadoProps {
  icon: IconType;
  title: string;
  description: string;
}


const CardPersonalizado: React.FC<CardPersonalizadoProps> = ({ icon: Icon, title, description }) => {
  return (
    <Card className="text-center  px-[30px] py-0 mb:py-[20px] mb-[0px] md:mb-[20px] flex flex-col bg-[#020013] items-center group hover:shadow-lg transition-shadow duration-300 border-none">
      <CardHeader>
        <div className="w-[105px] h-[105px] ]  lg:w-[140px] lg:h-[140px] flex justify-center items-center text-center rounded-full transition-all duration-400 bg-[#2f2c43] group-hover:bg-[#f2003a] mb-7">
          <div className="flex justify-center items-center ">
          <Icon className=" w-[60px] h-[60px]  ]  lg:w-[80px] lg:h-[80px]  " />

          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-[11px] text-[22px] text-white">{title}</CardTitle>
        <CardDescription className="text-[16px] m-3 text-white">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};


const FeatureAreaAboutUs: React.FC = () => {

  interface CardData {
    icon: IconType;
    title: string;
    description: string;
  }


  const cards: CardData[] = [
    {
      icon: GamesInnovationIcon,
      title: "Games are Innovation",
      description:
        "Loec qu felis, ultricies nec, pellen sem. Nulla consequat massa quic consequat ma gilla.",
    },
    {
      icon: CyberSecurityIcon,
      title: "Cyber Security",
      description:
        "Loec qu felis, ultricies nec, pellen sem. Nulla consequat massa quic consequat ma gilla.",
    },
    {
      icon: SafeEnvironmentIcon,
      title: "Safe Environment",
      description:
        "Loec qu felis, ultricies nec, pellen sem. Nulla consequat massa quic consequat ma gilla.",
    },
    {
      icon: ProfessionalPlayerIcon,
      title: "Professional Player",
      description:
        "Loec qu felis, ultricies nec, pellen sem. Nulla consequat massa quic consequat ma gilla.",
    },
  ];

  return (
    <div className="container mx-auto">
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

export default FeatureAreaAboutUs;

