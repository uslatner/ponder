// pages/spinners/[spinnerName].jsx
import { useRouter } from "next/router";
import CircularPage from "../../components/Spinners/CircularPage";
import DotPage from "../../components/Spinners/DotPage";
import SeqBoxMorphPage from "../../components/Spinners/SequentialBoxMorphingPage";
import WavePage from "../../components/Spinners/WavePage";

import styles from "./1.module.scss";

const SpinnerPage = () => {
  const router = useRouter();
  const { spinnerName } = router.query;

  const spinners = {
    circularspinner: {
      Component: CircularPage,
      initialValues: {
        color1: "#FF6F61",
        color2: "#FF6F61",
        opacity1: 0.5,
        opacity2: 1,
        direction: "-360deg",
        speed: "1s",
      },
    },
    dotspinner: {
      Component: DotPage,
      initialValues: {
        colors: ["#22333B", "#FF6F61", "#B7AEA3"],
      },
    },
    seqboxmorph: { // Add Sequential Box Morph spinner
      Component: SeqBoxMorphPage,
      initialValues: {
        colors: ["#22333B", "#FF6F61", "#ffa9a1", "#22333B"],
      },
    },
    wavespinner: {
      Component: WavePage,
      initialValues: {
        size: "60",
        colors: ["#ffa9a1", "#FF6F61"],
        size: 100,
        opacity: 1,
        speed: "2s",
      },
    }
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