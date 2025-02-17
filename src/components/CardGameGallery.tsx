import useCardsGames from "@/hooks/useCardsGames";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import ButtonCarouselArrows from "@/components/ButtonCarouselArrows";

interface CardDetailBannerProps {
  gameId: string;
}

const CardGameGallery: React.FC<CardDetailBannerProps> = ({ gameId }) => {
  const { cards } = useCardsGames();
  const card = cards.find((card) => card.id === gameId);

  console.log(card?.gallery);

  return (
    <div className="container mx-auto pt-5 md:pt-10 px-4 sm:px-1 md:px-0  lg:px-10 pb-20">
      <div className=" lg:pb-[9px] mb-[33px]">
        <h3 className="uppercase md:text-[26px] lg:text-[28px] ">gallery</h3>
        <span className="block w-[45px] md:w-[70px] lg:w-20 h-1 bg-[#f2003a] "></span>
      </div>
      <div className="">
        <div className="bg-[#39009D] rounded-xl p-6    ">
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
          >
            <CarouselContent>
              {card?.gallery.map((image, index) => (
                <CarouselItem key={index} className="md:basis-2/5">
                  <div className="">
                    <Card className="bg-transparent border-transparent ">
                      <CardContent className="p-0 border-transparent ">
                        <img
                          src={image}
                          alt="image"
                          className="w-full h-auto object-cover rounded-lg "
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <ButtonCarouselArrows/>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CardGameGallery;
