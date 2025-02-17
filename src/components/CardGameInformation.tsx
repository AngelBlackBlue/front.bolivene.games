import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import useCardsGames from "@/hooks/useCardsGames";

interface CardDetailBannerProps {
    gameId: string;
  }

const CardGameInformation: React.FC<CardDetailBannerProps> = ({ gameId }) => {
  const { cards } = useCardsGames();
  const card = cards.find((card) => card.id === gameId);

  console.log(card?.infotmation);
  return (
    <div className="container mx-auto pt-10 md:pt-20 px-4 sm:px-1 md:px-0 lg:px-10 pb-5">
      <div className=" lg:pb-[9px] mb-[33px]">
        <h3 className="uppercase md:text-[26px] lg:text-[28px] ">
          game information
        </h3>
        <span className="block w-[45px] md:w-[70px] lg:w-20 h-1 bg-[#f2003a] "></span>
      </div>

      <Card className="bg-[#39009D] text-white rounded-xl border-transparent">
        <CardContent className="text-white" >
          <Tabs defaultValue="general" className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px]">
            <TabsList className="text-white bg-[#39009D]  " >
              <TabsTrigger value="general" className="data-[state=active]:bg-[#39009D]  data-[state=inactive]:bg-[#220874] data-[state=active]:text-white text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px]"  >General</TabsTrigger>
              <TabsTrigger value="new" className="data-[state=active]:bg-[#39009D]  data-[state=inactive]:bg-[#220874] data-[state=active]:text-white text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px]">New</TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-[#39009D]  data-[state=inactive]:bg-[#220874] data-[state=active]:text-white text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px]">Events</TabsTrigger>
              <TabsTrigger value="news" className="data-[state=active]:bg-[#39009D]  data-[state=inactive]:bg-[#220874] data-[state=active]:text-white text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px]">News</TabsTrigger>
            </TabsList>

            <TabsContent value="general" >
              <p className="text-gray-300  lg:pt-5 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px]">
                {card?.infotmation.general}
          
              </p>
            </TabsContent>

            <TabsContent value="new">
              <p className="text-gray-300 pt-5 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px]">{card?.infotmation.new}</p>
            </TabsContent>

            <TabsContent value="events">
              <p className="text-gray-300 pt-5 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px]">{card?.infotmation.events}</p>
            </TabsContent>

            <TabsContent value="news">
              <p className="text-gray-300 pt-5 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px]">{card?.infotmation.news}</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardGameInformation;
