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
      <CircularSpinner />
      <Loaders />
      <h1>Spinners</h1>
      <ul>
        <li>
          <a href="/spinners/circularspinner">Circular Spinner</a>
        </li>
        <li>
          <a href="/spinners/dotspinner">Dot Spinner</a>
        </li>
        <li>
          <a href="/spinners/seqboxmorph">Sequential Box Morph</a>
        </li>
        <li>
          <a href="/spinners/wavespinner">Wave Spinner</a>
        </li>
      </ul>
    </div>
  );
}