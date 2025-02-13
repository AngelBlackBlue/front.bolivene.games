import Search from "@/components/Search";
import BannerGame from "../components/BannerGame";
import CardsGames from "@/components/CardsGames";

const Games = () => {
  return (
    <div className="bg-[#220874]">
      <section>
        <BannerGame />
      </section>
      <section>
        <Search />
      </section>
      <section>
        <CardsGames/>
      </section>
    </div>
  );
};

export default Games;
