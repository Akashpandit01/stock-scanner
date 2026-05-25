import { useContext } from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import ScannerPage from "./pages/ScannerPage";

import StockDetails from "./pages/StockDetails";

import {
  ThemeContext,
} from "./context/ThemeContext";

function App() {

  // context
  const {
    darkMode,
    setDarkMode,
  } = useContext(ThemeContext);

  return (

    <div
      style={{
        backgroundColor:
          darkMode ? "#121212" : "white",

        color:
          darkMode ? "white" : "black",

        minHeight: "100vh",
      }}
    >

      {/* TOP BAR */}
      <div
        style={{
          padding: "15px",

          display: "flex",

          justifyContent: "flex-end",
        }}
      >

        {/* THEME BUTTON */}
        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }

          style={{
            padding: "10px 20px",

            cursor: "pointer",
          }}
        >

          {darkMode
            ? "Light Mode"
            : "Dark Mode"}

        </button>

      </div>

      {/* ROUTES */}
      <Routes>

        <Route
          path="/"
          element={<ScannerPage />}
        />

        <Route
          path="/stock/:symbol"
          element={<StockDetails />}
        />

      </Routes>

    </div>
  );
}

export default App;