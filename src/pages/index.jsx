// pages/index.js
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Loaders from "../components/Loaders/Loaders";
import {CircularSpinner} from "my-awesome-spinner"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Loaders />
      <CircularSpinner />
    </div>
  );
}