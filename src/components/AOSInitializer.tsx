"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS (optional)
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return null; // This component doesn't render anything itself
};

export default AOSInitializer;
