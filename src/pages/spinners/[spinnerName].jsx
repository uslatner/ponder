// pages/spinners/[name].jsx
import { useRouter } from "next/router";
import CircularPage from "../../components/Spinners/CircularSpinner1";
import DotPage from "../../components/Spinners/DotSpinner1"; // Adjust the path as needed

import styles from "./1.module.scss"; // You can use a common stylesheet or separate ones

const SpinnerPage = () => {
  const router = useRouter();
  const { spinnerName } = router.query; // Get the spinner name from the URL

  // Define your spinners based on names
  const spinners = {
    circularspinner: {
      Component: CircularPage,
      initialValues: {
        color1: "blue",
        color2: "green",
        opacity1: 0.5,
        opacity2: 1,
        direction: "-360deg",
        speed: "1s",
      },
    },
    dotspinner: {
      Component: DotPage,
      initialValues: {
        colors: ["blue", "#EAE0D5", "#C6AC8F"],
      },
    },
    // Add more spinners as needed
  };

  // Get the current spinner based on the name
  const spinner = spinnerName ? spinners[spinnerName.toLowerCase()] : null; // Convert to lowercase for matching

  if (!spinner) {
    return <div>Spinner not found</div>; // Handle case for invalid name
  }

  const { Component, initialValues } = spinner;

  return (
    <div className={styles.container}>
      <h1>{spinnerName.replace(/_/g, ' ').toUpperCase()} Spinner</h1>
      <Component initialValues={initialValues} />
      {/* Add any other relevant content or forms here */}
    </div>
  );
};

export default SpinnerPage;
