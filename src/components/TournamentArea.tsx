import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img from "@/assets/img/tournament/tournament-1-1.jpg";
import ButtonPlayStore from "./ButtonPlayStore";

const images = [
  { id: 1, src: img, alt: "Imagen 1" },
  { id: 2, src: img, alt: "Imagen 2" },
  { id: 3, src: img, alt: "Imagen 3" },
  { id: 4, src: img, alt: "Imagen 4" },
  { id: 5, src: img, alt: "Imagen 5" },
];

export function TournamentArea() {
  return (
    <div>
    
    <div className="relative z-10">
      <div className="container mx-auto flex justify-center items-center">
    <Carousel className="lg:px-[200px]">
      <div className="relative flex justify-center items-center">
        {/* Contenido del Carrusel */}
        <CarouselContent>
          {images.map(({ id, src, alt }) => (
            <CarouselItem key={id}>
              <Card className="bg-transparent border-none">
                <CardContent className="flex items-center justify-center py-0 px-3">
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto transition-transform duration-300 transform hover:scale-110 pb-[45px]"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Texto Informativo */}
        <div className="max-sm:hidden absolute z-10 mx-auto max-w-[580px] bg-[#220874] xl:top-60 lg:top-40 md:top-[200px] sm:top-44">
          <h3 className="md:px-12 md:py-9 px-8 py-5">
            <a className="text-white lg:text-[40px] text-[30px] transition-all duration-1000 ease-in-out hover:text-[#f2003a]">
              Path of Destiny
            </a>
            <p className="lg:text-[20px] text-[16px] mb-[18px] text-white">
              Immerse yourself in the vibrant universe of Path of Destiny, a
              massively multiplayer online RPG (MMORPG) that will transport you
              to a world full of action, strategy, and fantasy.
            </p>
           <ButtonPlayStore/>
           </h3>
        </div>
      </div>

      {/* Botones de Navegación */}
      <CarouselPrevious className="z-50 border-none rounded-none lg:-rotate-90 text-[14px] sm:text-[16px] uppercase bg-[#f2f2f2] text-black transition-colors hover:text-white hover:bg-[#f2003a] sm:py-[35px] py-6 sm:px-[82.5px] px-14 lg:mt-36 md:mt-64 sm:mt-60 mt-40 ml-20" />
      <CarouselNext className="border-none rounded-none lg:rotate-90 text-[16px] uppercase bg-[#f2f2f2] transition-colors hover:text-white hover:bg-[#f2003a] text-black sm:py-[35px] py-6 sm:px-[82.5px] px-14 lg:mt-36 md:mt-64 sm:mt-60 mt-40 mr-20" />
    </Carousel>
    </div>
    </div>
    </div>
  
  );
}

export default TournamentArea;
