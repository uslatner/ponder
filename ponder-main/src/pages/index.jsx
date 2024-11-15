import HeroSection from "../components/features/HeroSection";
import Loaders from "../components/Loaders/Loaders";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <p>test test test</p>
      <div id="loadersSection">
        <Loaders />
      </div>
    </div>
  );
}