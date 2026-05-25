import {  useEffect, useState,useContext,} from "react";

import { useParams } from "react-router-dom";

import { getStockDetails, getAllQuotes,} from "../api/stockApi";

import InfoCard from "../components/InfoCard";

import StockChart from "../components/StockChart";

import { ThemeContext,} from "../context/ThemeContext";

function StockDetails() {

  // theme
  const { darkMode } =
    useContext(ThemeContext);

  // symbol from url
  const { symbol } = useParams();

  // stock state
  const [stock, setStock] =
    useState(null);

  // loading
  const [loading, setLoading] =
    useState(true);

  // fetch stock details
  useEffect(() => {

    fetchStockDetails();

  }, []);

  // api call
  const fetchStockDetails = async () => {

    try {

      // FIRST API
      const snapshotData =
        await getStockDetails(symbol);

      console.log(
        "SNAPSHOT API",
        snapshotData
      );

      // if snapshot api has data
      if (
        snapshotData &&
        snapshotData.open
      ) {

        setStock({

          open:
            snapshotData.open,

          high:
            snapshotData.high,

          low:
            snapshotData.low,

          close:
            snapshotData.close,

          volume:
            snapshotData.volume,

          vwap:
            snapshotData.vwap,

          mktCap:
            snapshotData.mktCap,

          peRatio:
            snapshotData.peRatio,
        });

      } else {

        // FALLBACK API
        const allQuotes =
          await getAllQuotes();

        const foundStock =
          allQuotes.find(
            (item) =>
              item.symbol === symbol
          );

        console.log(
          "FALLBACK DATA",
          foundStock
        );

        setStock({

          open:
            foundStock?.open || "--",

          high:
            foundStock?.high || "--",

          low:
            foundStock?.low || "--",

          close:
            foundStock?.ltp || "--",

          volume:
            foundStock?.volume || "--",

          vwap:
            foundStock?.vwap || "--",

          mktCap:
            foundStock?.mktCap || "--",

          peRatio:
            foundStock?.peRatio || "--",
        });
      }

    } catch (error) {

      console.log(error);

      // final fallback
      setStock({

        open: "--",

        high: "--",

        low: "--",

        close: "--",

        volume: "--",

        vwap: "--",

        mktCap: "--",

        peRatio: "--",
      });

    } finally {

      setLoading(false);
    }
  };

  // loading
  if (loading) {

    return <h2>Loading...</h2>;
  }

  return (

    <div
      style={{
        padding: "20px",

        backgroundColor:
          darkMode
            ? "#121212"
            : "white",

        color:
          darkMode
            ? "white"
            : "black",

        minHeight: "100vh",
      }}
    >

      {/* TITLE */}
      <h1>

        {symbol} Details

      </h1>

      {/* CARDS */}
      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",

          gap: "20px",

          marginTop: "20px",
        }}
      >

        <InfoCard
          title="OPEN"
          value={stock.open}
        />

        <InfoCard
          title="HIGH"
          value={stock.high}
        />

        <InfoCard
          title="LOW"
          value={stock.low}
        />

        <InfoCard
          title="CLOSE"
          value={stock.close}
        />

        <InfoCard
          title="VOLUME"
          value={stock.volume}
        />

        <InfoCard
          title="VWAP"
          value={stock.vwap}
        />

        <InfoCard
          title="MKT CAP"
          value={stock.mktCap}
        />

        <InfoCard
          title="PE RATIO"
          value={stock.peRatio}
        />

      </div>

      {/* CHART */}
      <StockChart symbol={symbol} />

    </div>
  );
}

export default StockDetails;