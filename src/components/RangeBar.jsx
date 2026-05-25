function RangeBar({ low, high, ltp }) {

  // calculate position percentage
  const percentage =
    ((ltp - low) / (high - low)) * 100;

  return (

    <div
      style={{
        width: "200px",
      }}
    >

      {/* LOW AND HIGH */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
        }}
      >

        <span>{low}</span>

        <span>{high}</span>

      </div>

      {/* BAR */}
      <div
        style={{
          position: "relative",
          height: "6px",
          background: "#ddd",
          borderRadius: "10px",
          marginTop: "5px",
        }}
      >

        {/* LTP DOT */}
        <div
          style={{
            position: "absolute",

            left: `${percentage}%`,

            top: "-5px",

            width: "15px",

            height: "15px",

            background: "blue",

            borderRadius: "50%",
          }}
        ></div>

      </div>

    </div>
  );
}

export default RangeBar;