import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import EsportsTeamsIcon from "@/icons/EsportsTeams";

const TeamAreaAboutUs = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "Descripción de la tarjeta 1",
      content: "Contenido de la tarjeta 1",
    },
    {
      id: 2,
      title: "Card 2",
      description: "Descripción de la tarjeta 2",
      content: "Contenido de la tarjeta 2",
    },
    {
      id: 3,
      title: "Card 3",
      description: "Descripción de la tarjeta 3",
      content: "Contenido de la tarjeta 3",
    },
    {
      id: 4,
      title: "Card 4",
      description: "Descripción de la tarjeta 4",
      content: "Contenido de la tarjeta 4",
    },
    {
      id: 5,
      title: "Card 5",
      description: "Descripción de la tarjeta 5",
      content: "Contenido de la tarjeta 5",
    },
    {
      id: 6,
      title: "Card 6",
      description: "Descripción de la tarjeta 6",
      content: "Contenido de la tarjeta 6",
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-[120px] pb-[90px]">
      <div className="text-center text-white mb-9 ">
        <div className="-mt-1 mb-7">
          <span className=" text-[18px] -mt-1 mb-7">OUR MATCHES</span>
        </div>
        <h2 className="text-[42px] -mt-3 mb-4 ">ESPORTS TEAMS</h2>
        <div className="flex justify-center">

          <EsportsTeamsIcon className=" w-40 h-6 mb-3" />
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
              <div className="p-1">
                <Card>
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{card.content}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TeamAreaAboutUs;
