import style from "./AboutUs.module.scss";
import HeroSectionAboutUs2 from "../components/features/HeroSectionAboutUs2";

function AboutUs2() {
  return (
    <div className={style.bg}>
      <div className={style.bg2}>
        <div>
          <HeroSectionAboutUs2 />
        </div>
      </div>
    </div>
  );
}

export default AboutUs2;
