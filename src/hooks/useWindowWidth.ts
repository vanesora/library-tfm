import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  const handleSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
};
