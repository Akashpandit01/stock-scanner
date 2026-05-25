import {
  useContext,
} from "react";

import {
  ThemeContext,
} from "../context/ThemeContext";

function InfoCard({
  title,
  value,
}) {

  // context
  const { darkMode } =
    useContext(ThemeContext);

  return (

    <div
      style={{
        border:
          darkMode
            ? "1px solid #333"
            : "1px solid #ddd",

        padding: "20px",

        borderRadius: "12px",

        textAlign: "center",

        background:
          darkMode
            ? "#1e1e1e"
            : "white",

        color:
          darkMode
            ? "white"
            : "black",

        boxShadow:
          "0px 2px 5px rgba(0,0,0,0.2)",

        transition: "0.3s",
      }}
    >

      {/* TITLE */}
      <h3
        style={{
          color:
            darkMode
              ? "#bbb"
              : "gray",
        }}
      >

        {title}

      </h3>

      {/* VALUE */}
      <h2
        style={{
          marginTop: "10px",
        }}
      >

        {value || "--"}

      </h2>

    </div>
  );
}

export default InfoCard;