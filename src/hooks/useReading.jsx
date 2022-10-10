import React from "react";
import { useState, useEffect } from "react";

const useReading = () => {
  const [compilation, setCompilation] = useState(0);

  useEffect(() => {
    const updateScrool = () => {
      const currentProgress = window.scrollY;

      const heightOfScroll = document.body.scrollHeight - window.innerHeight;

      if (heightOfScroll) {
        setComplition(
          Number((currentProgress / heightOfScroll).toFixed(2)) * 100
        );
      }
    };

    window.addEventListener("scroll", updateScrool);

    return () => {
      window.removeEventListener("scroll", updateScrool);
    };
  }, []);

  return compilation;
};

export default useReading;
