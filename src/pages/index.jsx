import HeroSection from "../components/HeroSection";
import Loaders from "../components/Loaders/Loaders";
import {CircularSpinner} from "my-awesome-spinner";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Loaders />
      <CircularSpinner />
    </div>
  );
}