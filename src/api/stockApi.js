import axios from "axios";

// SCANNER API
export const getScannerStocks = async () => {

  const response = await axios.get( "https://intradayscreener.com/api/openhighlow/cash");

  return response.data;
};


// QUOTES API
export const getAllQuotes = async () => {

  const response = await axios.get("https://intradayscreener.com/api/allQuotesCompact");

  return response.data;
};


// STOCK DETAILS API
export const getStockDetails = async (symbol) => {

  const response = await axios.get(`https://intradayscreener.com/api/TechnicalAnaysis/stocksnapshot/${symbol}` );

  return response.data;
};


// CHART API
export const getChartData = async (symbol,interval) => {

  const response = await axios.get(`https://intradayscreener.com/api/CandlestickAnalysis/chartData/${symbol}/${interval}`);

  return response.data;
};