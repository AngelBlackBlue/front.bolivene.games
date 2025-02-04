import Breadcumb from "@/components/BreadCumb";
import { HomeBolivene } from "@/components/HomeBolivene";
import FeatureAreaAboutUs from '../components/FeatureAreaAboutUs';
import TeamAreaAboutUs from "@/components/TeamAreaAboutUs";

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
        <FeatureAreaAboutUs/>
      </section>
      <section>
        <TeamAreaAboutUs/>
      </section>
    </>
  );
};

export default AboutUs;
