// pages/spinners/[spinnerName].jsx
import { useRouter } from "next/router";
import SpinPage from "../../components/SpinnersPages/SpinPage";
import DotsPage from "../../components/SpinnersPages/DotsPage";
import PulseBoxPage from "../../components/SpinnersPages/PulseBoxPage";
import WavePage from "../../components/SpinnersPages/WavePage";
import CirclesPage from "../../components/SpinnersPages/CirclesPage";

const SpinnerPage = () => {
  const router = useRouter();
  const { spinnerName } = router.query;

  const spinners = {
    spin: {
      Component: SpinPage,
      initialValues: {
        color1: "#FF6F61",
        color2: "#FF6F61",
        opacity1: 0.5,
        opacity2: 1,
        direction: "-360deg",
        speed: "2s",
        size:"100"
      },
    },
    dots: {
      Component: DotsPage,
      initialValues: {
        color1: "#22333B",
        color2: "#FF6F61",
        color3: "#B7AEA3",
      },
    },
    pulsebox: { // Add Sequential Box Morph spinner
      Component: PulseBoxPage,
      initialValues: {
        color1: "#22333B",
        color2: "#FF6F61",
        color3:"#ffa9a1",
        color4:"#22333B"
      },
    },
    wave: {
      Component: WavePage,
      initialValues: {
        size: "60",
        color1: "#ffa9a1", 
        color2: "#FF6F61",
        size: 100,
        opacity: 1,
        speed: "2s",
      },
    },
    circles: {
      Component: CirclesPage,
      initialValues: {}
    },
  };

  const spinner = spinnerName ? spinners[spinnerName.toLowerCase()] : null;

  if (!spinner) {
    return <div>Spinner not found</div>;
  }

  const { Component, initialValues } = spinner;

  return (
    <div>
      <Component initialValues={initialValues} />
    </div>
  );
};

export default SpinnerPage;