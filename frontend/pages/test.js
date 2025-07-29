import React from "react";
import useMediaQuery from "@/utility/media/MediaQuery";

function Test() {
  const isMobile = useMediaQuery("(maX-width: 1024px)");
  console.log("is", isMobile);
  return <div>Test</div>;
}

export default Test;
