import useCardsGames from "@/hooks/useCardsGames";


interface CardDetailBannerProps {
  gameId: string; 
}

const CardDetailBanner: React.FC<CardDetailBannerProps> = ({ gameId }) => {
  const { cards } = useCardsGames();

  const banner = cards.find((card) => card.id === gameId); 

  return (
    <div >
      <img src={banner?.banner} alt="banner" className=" lg:w-full lg:h-96 lg:object-cover lg:object-[50%_25%]" />
    </div>
  );
};

export default CardDetailBanner;