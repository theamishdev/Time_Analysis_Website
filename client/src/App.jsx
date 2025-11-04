import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <ThemeProvider>
      <AppRoutes />   {/* router paths are present inside this folder*/ }
    </ThemeProvider>
  );
};

export default App;
