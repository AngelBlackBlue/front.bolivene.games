import Breadcumb from "@/components/BreadCumb";
import { HomeBolivene } from "@/components/HomeBolivene";
import FeatureAreaAboutUs from "../components/FeatureAreaAboutUs";
import TeamAreaAboutUs from "@/components/TeamAreaAboutUs";
import CounterArea from "../components/CounterArea";
import TournamentHistory from "@/components/TournamentHistory";

const AboutUs = () => {
  return (
    <>
      <section>
        <Breadcumb />
      </section>
      <section className="container mx-auto flex justify-center items-center ms:pt-[120px] pt-[80px] ms:pb-[90px] pb-[50px]">
        <HomeBolivene />
      </section>
      <section>
        <FeatureAreaAboutUs />
      </section>
      <section>
        <TeamAreaAboutUs />
      </section>
      <section>
        <CounterArea />
      </section>
      <section>
        <TournamentHistory/>
      </section>
    </>
  );
};

export default AboutUs;
