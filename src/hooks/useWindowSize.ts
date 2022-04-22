import React from "react";

export interface Size {
  width: number | undefined;
  height: number | undefined;
}

const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = React.useState<Size>({
    width: undefined,
    height: undefined,
  });

  const handleResize = React.useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  return windowSize;
};

export default useWindowSize;
