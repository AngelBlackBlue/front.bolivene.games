import React from "react";
import GameCard from "./CardGame";
import useCardsGames from "@/hooks/useCardsGames";

const CardsList: React.FC = () => {
  const { cards } = useCardsGames();

  return (
    <div className="container mx-auto py-9 flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cards.map((card) => (
          <GameCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardsList;