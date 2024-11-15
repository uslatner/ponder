import style from "./AboutUs.module.scss";
import HeroSectionAboutUs from "../components/features/HeroSectionAboutUs";

function AboutUs() {
  return (
    <div className={style.bg}>
      <div className={style.bg2}>
        <div>
          <HeroSectionAboutUs />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;