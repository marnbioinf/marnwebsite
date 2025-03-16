import React from "react";
import AppRouter from "./Router";
import { useDevice } from "./hooks/responsive";

function App() {
  const { isDesktop, isTablet, isMobile } = useDevice();

  return (
    <div>
      {isDesktop}
      {isTablet}
      {isMobile}
      <AppRouter />
    </div>
  );
}

export default App;
