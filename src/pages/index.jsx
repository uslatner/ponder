// pages/index.js
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Loaders from "../components/Loaders/Loaders";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Loaders />
      <h1>Spinners</h1>
      <ul>
        <li>
          <Link href="/spinners/circularspinner">Circular Spinner</Link>
        </li>
        <li>
          <Link href="/spinners/dotspinner">Dot Spinner</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}