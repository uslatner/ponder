import HeroSection from "../components/HeroSection";
import Loaders from "../components/Loaders/Loaders";
import {CircularSpinner} from "my-awesome-spinner";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div id="loadersSection">
        <Loaders />
      </div>
      <CircularSpinner />
    </div>
  );
}