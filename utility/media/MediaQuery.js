import { useState, useEffect } from "react";

export const useMediaQuery = (width) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window?.matchMedia(`(max-width: ${width}px)`);
    // Set initial value
    setMatches(mediaQuery.matches);

    const handleChange = (event) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Clean up
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [width]);

  return matches;
};
