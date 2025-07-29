import { useState, useEffect } from "react";

// Custom hook for media query detection
function useMediaQuery(query) {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    setMatches(mediaQueryList?.matches);

    // Function to update 'matches' when the media query changes
    const mediaQueryListener = (event) => {
      setMatches(event.matches);
    };
    // Add and remove the listener when the component mounts/unmounts
    mediaQueryList.addEventListener("change", mediaQueryListener);

    return () => {
      // Clean up the listener when the component unmounts
      mediaQueryList.removeEventListener("change", mediaQueryListener);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
