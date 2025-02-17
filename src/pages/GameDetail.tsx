import React from "react";
import { useParams } from "react-router-dom";
import CardDetailBanner from "@/components/CardDetailBanner";
import CardGameWithQR from "@/components/CardGameWithQR";
import CardGameGallery from "@/components/CardGameGallery";
import CardGameInformation from '../components/CardGameInformation';

const GameDetail: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();

  return (
    <div className="bg-[#220874]">
      <section>
        <CardDetailBanner gameId={gameId!} />
      </section>
      <section>
        <CardGameWithQR gameId={gameId!}/>
      </section>
      <section>
        <CardGameInformation gameId={gameId!} />
      </section>
      <section>
        <CardGameGallery gameId={gameId!}/>
      </section>
    </div>
  );
};

export default GameDetail;
