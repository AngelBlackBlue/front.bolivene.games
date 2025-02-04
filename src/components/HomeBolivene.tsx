import iconCheck from "@/assets/img/icon/check-ic-1-1.png";
import about from "@/assets/img/about/about-3-1.jpg";
import ReactPlayer from "react-player/youtube";
import PuffLoader from "react-spinners/PuffLoader";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import PlayIcon from "@/icons/Play";

const items = [
  "Publicación y lanzamiento de videojuegos móviles de alta calidad",
  "Estrategias modernas que garantizan experiencias fluidas para los jugadores",
  "Investigación constante sobre tendencias y preferencias de usuarios",
  "Desarrollo de juegos accesibles y entretenidos para una audiencia global",
  "Lanzamiento de títulos como Patch of Destiny, nuestro RPG insignia",
  "Compromiso con la innovación y la satisfacción de la comunidad gamer",
];

export const HomeBolivene = () => {
  return (
    <div className="container text-white">
      <div className=" ">
        <div className="md:mx-[15px] mx-0">
          <div className="mb-[24px] px-[15px] pb-[8px]">
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="md:col-span-2 col-span-1 md:w-[740px] w-[320px]">
                <div className="sm:text-[18px] text-[16px] -mt-[7.2px] mb-[27px] ">
                  BOLIVENE
                </div>
                <h2 className="md:text-[48px] text-[30px] -mt-[17px] mb-[17px]  ">
                  Games and Interactive Entertainment Industry
                </h2>
              </div>
              <div className="lg:ml-[220px] md:px-[15px] text-[18px] ">
                <div className="pb-[9px] mb-[33px]">
                  <h3>OUR STORY</h3>
                  <span className="block w-10 h-1 bg-[#f2003a] mt-1"></span>
                </div>
                <p className="text-[18px] mb-[18px] w-full">
                  Is a company specializing in the publishing and launch of
                  mobile games, focusing on bringing accessible and entertaining
                  gaming experiences to a broad audience.
                </p>
              </div>
              <div className="lg:ml-[110px] md:px-[15px]">
                <div className="pb-[9px] mb-[33px] text-[16px]">
                  <h3>ACTIVITIES</h3>
                  <span className="block w-10 h-1 bg-[#f2003a] mt-1"></span>
                </div>
                <ul>
                  {items.map((item, index) => (
                    <li key={`activity-${index}`} className="flex items-start mb-[8px] gap-4">
                      <img src={iconCheck} alt="icon check" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 pt-3 px-[15px] ">
          <div className="flex justify-center items-center ">
            <img src={about} alt="" className="relative" />
            <Dialog>
              <DialogTrigger className="absolute z-50 ">
                <div className="relative flex items-center justify-center">
                  <PuffLoader color="#ffffff" loading={true} size={200} />

                  <PlayIcon className="absolute md:w-10 w-5  " />
                </div>
              </DialogTrigger>
              <DialogContent className=" bg-transparent border-none w-[90vw] max-w-[900px] min-w-[300px] mt-20  ">
                <DialogHeader>
                  <DialogDescription>
                    <div className="relative pt-[56.25%]">
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=KkOZiZcW7PE"
                        controls
                        loop
                        playing
                        width="100%"
                        height="100%"
                        className="absolute top-0 left-0"
                      />
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};
