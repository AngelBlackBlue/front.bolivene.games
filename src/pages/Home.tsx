import { TournamentArea } from "@/components/TournamentArea";
import tournament from "@/assets/img/bg/tournament-bg-1-1.jpg";
import { HomeBolivene } from "@/components/HomeBolivene";
import CallToAction from "@/components/CallToAction";


export const Home = () => {
  return (
    <div>
      <section
        className="relative py-[100px] bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url(${tournament})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <TournamentArea />
      </section>
      <section className="container mx-auto flex justify-center items-center ms:pt-[120px] pt-[80px] ms:pb-[90px] pb-[50px]">
        <HomeBolivene />
      </section>
      <section className="container mx-auto flex justify-center items-center ms:pt-[120px] sm:pt-[80px] ms:pb-[90px] pb-[50px] px-[15px]">
        <CallToAction />
      </section>

    </div>
  );
};

export default Home;
