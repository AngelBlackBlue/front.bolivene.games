import game from "@/assets/img/bg/cta-bg-2-1.jpg";

import ButtonPlayStore from "@/components/ButtonPlayStore";

export default function CallToAction() {
  return (
    <div className=" text-white ">
      <div className=" sm:relative mb-[24px]  pb-[8px] ">
        <img src={game} alt="Path of Destiny" />
        {/* contenido de la imagen */}
        <div className="sm:absolute top-0 left-0 xl:py-[25px] lg:py-[0px] md:py-[12px]  md:pl-[100px] px-[10px] md:w-[550px] ">
          <h2 className="lg:text-[46px] md:text-[45px}] sm:text-[25px] text-[20px] xl::mb-[10px] sm:my-0 my-2  ">
            Our Featured Game: Path of Destiny
          </h2>
          <p className="text-[16px] xl:mb-[30px] mb-[15px]">
            Explora territorios mágicos llenos de desafíos emocionantes, forma
            alianzas épicas con jugadores de todo el mundo, y personaliza tus
            héroes equipándolos con habilidades únicas para destacar en la
            batalla. Disponible exclusivamente para dispositivos móviles.
          </p>
          <ButtonPlayStore />
        </div>
      </div>
    </div>
  );
}
