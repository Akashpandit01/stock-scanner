function PivotRange({ stock }) {

  // current price
  const ltp = Number(stock.ltp);

  // dummy pivot values
  const s3 = ltp - 30;
  const s2 = ltp - 20;
  const s1 = ltp - 10;

  const pp = ltp;

  const r1 = ltp + 10;
  const r2 = ltp + 20;
  const r3 = ltp + 30;

  let result = "";

  // simple conditions
  if (ltp < s3) {

    result = "Below S3";

  } else if (ltp >= s3 && ltp < s2) {

    result = "S3 - S2";

  } else if (ltp >= s2 && ltp < s1) {

    result = "S2 - S1";

  } else if (ltp >= s1 && ltp < pp) {

    result = "S1 - PP";

  } else if (ltp >= pp && ltp < r1) {

    result = "PP - R1";

  } else if (ltp >= r1 && ltp < r2) {

    result = "R1 - R2";

  } else if (ltp >= r2 && ltp < r3) {

    result = "R2 - R3";

  } else {

    result = "Above R3";
  }

  return (

    <div
      style={{
        fontWeight: "bold",
        color: "#1976d2",
      }}
    >

      {result}

    </div>
  );
}

export default PivotRange;