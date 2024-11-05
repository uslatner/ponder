import HeroSection from "../components/features/HeroSection";
import Loaders from "../components/Loaders/Loaders";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div id="loadersSection">
        <Loaders />
      </div>
    </div>
  );
}