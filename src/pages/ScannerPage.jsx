import { useEffect, useState, useContext, } from "react";

import {
  getScannerStocks, getAllQuotes,
} from "../api/stockApi";

import StockTable from "../components/StockTable";

import { ThemeContext, } from "../context/ThemeContext";

function ScannerPage() {

  // context
  const { darkMode } = useContext(ThemeContext);

  // stocks
  const [stocks, setStocks] = useState([]);

  // loading
  const [loading, setLoading] = useState(true);

  // error
  const [error, setError] = useState("");

  useEffect(() => {

    fetchData();

  }, []);

  // fetch data
  const fetchData = async () => {

    try {

      setLoading(true);

      const scannerData = await getScannerStocks();

      const quotesData = await getAllQuotes();

      // merge
      const mergedData = scannerData.map((item) => {

        const quote = quotesData.find((q) => q.symbol === item.symbol);

        return {
          ...item,
          ...quote,
        };
      });

      setStocks(mergedData);

    } catch (err) {

      console.log(err);

      setError("Failed to load data");

    } finally {

      setLoading(false);
    }
  };

  // loading
  if (loading) {

    return <h2>Loading...</h2>;
  }

  // error
  if (error) {

    return <h2>{error}</h2>;
  }

  return (

    <div
      style={{
        padding: "20px",

        backgroundColor:
          darkMode ? "#121212" : "white",

        color:
          darkMode ? "white" : "black",
      }}
    >

      <h1>

        Open High Low Scanner

      </h1>

      <StockTable stocks={stocks} />

    </div>
  );
}

export default ScannerPage;