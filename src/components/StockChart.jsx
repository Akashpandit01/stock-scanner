import { useEffect, useRef, useState } from "react";

import Highcharts from "highcharts";

import { getChartData } from "../api/stockApi";

function StockChart({ symbol }) {

  // chart reference
  const chartRef = useRef(null);

  // chart type
  const [chartType, setChartType] =
    useState("area");

  // interval
  const [interval, setInterval] =
    useState("5m");

  // chart data
  const [chartData, setChartData] =
    useState([]);

  // fetch data
  useEffect(() => {

    fetchChartData();

  }, [interval]);

  // render chart
  useEffect(() => {

    if (chartData.length > 0) {

      Highcharts.chart(chartRef.current, {

        title: {
          text: `${symbol} Chart`,
        },

        xAxis: {
          categories: [
            "9AM",
            "10AM",
            "11AM",
            "12PM",
            "1PM",
            "2PM",
            "3PM",
            "4PM",
            "5PM",
            "6PM",
          ],
        },

        tooltip: {
          valueDecimals: 2,
        },

        series: [
          {
            type: chartType,

            name: symbol,

            data: chartData,
          },
        ],
      });
    }

  }, [chartData, chartType]);

  // fetch chart API
  const fetchChartData = async () => {

    try {

      const response =
        await getChartData(
          symbol,
          interval
        );

      console.log(response);

      // if real API data exists
      if (
        response.data &&
        response.data.length > 0
      ) {

        const prices =
          response.data.map((item) => {

            return Number(
              item.close || 0
            );
          });

        setChartData(prices);

      } else {

        // fallback dummy data
        setChartData([
          100,
          120,
          110,
          140,
          170,
          150,
          180,
          190,
          170,
          200,
        ]);
      }

    } catch (error) {

      console.log(error);

      // fallback dummy data
      setChartData([
        100,
        120,
        110,
        140,
        170,
        150,
        180,
        190,
        170,
        200,
      ]);
    }
  };

  return (

    <div
      style={{
        marginTop: "40px",
      }}
    >

      {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >

        {/* INTERVAL */}
        <button
          onClick={() =>
            setInterval("5m")
          }
        >

          5m

        </button>

        <button
          onClick={() =>
            setInterval("15m")
          }
        >

          15m

        </button>

        <button
          onClick={() =>
            setInterval("1D")
          }
        >

          1D

        </button>

        {/* CHART TYPE */}
        <button
          onClick={() =>
            setChartType("area")
          }
        >

          Area

        </button>

        <button
          onClick={() =>
            setChartType("line")
          }
        >

          Line

        </button>

        <button
          onClick={() =>
            setChartType("column")
          }
        >

          Bar

        </button>

      </div>

      {/* CHART */}
      <div
        ref={chartRef}

        style={{
          width: "100%",
          height: "500px",
        }}
      ></div>

    </div>
  );
}

export default StockChart;

































































































































// import { useEffect, useRef, useState } from "react";

// import Highcharts from "highcharts";

// function StockChart({ symbol }) {

//   // chart reference
//   const chartRef = useRef(null);

//   // chart type
//   const [chartType, setChartType] =
//     useState("area");

//   // interval
//   const [interval, setInterval] =
//     useState("5m");

//   // render chart
//   useEffect(() => {

//     renderChart();

//   }, [chartType, interval]);

//   // chart function
//   const renderChart = () => {

//     // dummy data
//     const data = [
//       100,
//       120,
//       110,
//       140,
//       170,
//       150,
//       180,
//       190,
//       170,
//       200,
//     ];

//     Highcharts.chart(chartRef.current, {

//       title: {
//         text: `${symbol} Chart`,
//       },

//       // x axis
//       xAxis: {
//         categories: [
//           "9AM",
//           "10AM",
//           "11AM",
//           "12PM",
//           "1PM",
//           "2PM",
//           "3PM",
//           "4PM",
//           "5PM",
//           "6PM",
//         ],
//       },

//       // tooltip
//       tooltip: {
//         valueDecimals: 2,
//       },

//       // series
//       series: [
//         {
//           type: chartType,

//           name: symbol,

//           data: data,
//         },
//       ],
//     });
//   };

//   return (

//     <div
//       style={{
//         marginTop: "40px",
//       }}
//     >

//       {/* TOP BUTTONS */}
//       <div
//         style={{
//           display: "flex",
//           gap: "10px",
//           marginBottom: "20px",
//           flexWrap: "wrap",
//         }}
//       >

//         {/* INTERVAL BUTTONS */}
//         <button
//           onClick={() =>
//             setInterval("5m")
//           }
//         >

//           5m

//         </button>

//         <button
//           onClick={() =>
//             setInterval("15m")
//           }
//         >

//           15m

//         </button>

//         <button
//           onClick={() =>
//             setInterval("1D")
//           }
//         >

//           1D

//         </button>

//         {/* CHART TOGGLE */}
//         <button
//           onClick={() =>
//             setChartType("area")
//           }
//         >

//           Area Chart

//         </button>

//         <button
//           onClick={() =>
//             setChartType("line")
//           }
//         >

//           Line Chart

//         </button>

//         <button
//           onClick={() =>
//             setChartType("column")
//           }
//         >

//           Bar Chart

//         </button>

//       </div>

//       {/* CHART */}
//       <div
//         ref={chartRef}

//         style={{
//           width: "100%",
//           height: "500px",
//         }}
//       ></div>

//     </div>
//   );
// }

// export default StockChart;