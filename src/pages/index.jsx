// pages/index.js
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Loaders from "../components/Loaders/Loaders";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Loaders />
      <Footer />
    </div>
  );
}
