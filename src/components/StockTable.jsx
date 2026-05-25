import {
  useState,
  useContext,
} from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  TablePagination,
  TableSortLabel,
  Tooltip,
} from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";

import { useNavigate } from "react-router-dom";

import RangeBar from "./RangeBar";
import PivotRange from "./PivotRange";

import {
  ThemeContext,
} from "../context/ThemeContext";

function StockTable({ stocks }) {

  // theme context
  const { darkMode } = useContext(ThemeContext);

  const navigate = useNavigate();

  // pagination
  const [page, setPage] =useState(0);

  const [rowsPerPage, setRowsPerPage] =useState(5);

  // sorting
  const [order, setOrder] =useState("asc");

  const [orderBy, setOrderBy] =useState("symbol");

  // sorting function
  const handleSort = (column) => {

    const isAsc =orderBy === column && order === "asc";

    setOrder(isAsc ? "desc" : "asc");

    setOrderBy(column);
  };

  // sorted data
  const sortedData = [...stocks].sort((a, b) => {

      if (order === "asc") {

        return a[orderBy] > b[orderBy]  ? 1 : -1;

      } else {

        return a[orderBy] <
          b[orderBy]
          ? 1
          : -1;
      }
    }
  );

  // pagination data
  const paginatedData =
    sortedData.slice(
      page * rowsPerPage,
      page * rowsPerPage +
        rowsPerPage
    );

  return (

    <Paper
      elevation={5}

      style={{
        marginTop: "20px",

        borderRadius: "12px",

        overflow: "hidden",

        backgroundColor:
          darkMode
            ? "#1e1e1e"
            : "white",

        color:
          darkMode
            ? "white"
            : "black",

        transition: "0.3s",
      }}
    >

      <TableContainer
        style={{
          maxHeight: "500px",
          overflow: "auto",
        }}
      >

        <Table stickyHeader>

          {/* HEADER */}
          <TableHead>

            <TableRow>

              {/* STOCK */}
              <TableCell
                style={{
                  backgroundColor:
                    darkMode
                      ? "#2c2c2c"
                      : "white",

                  color:
                    darkMode
                      ? "white"
                      : "black",

                  fontWeight: "bold",
                }}
              >

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >

                  <TableSortLabel
                    active={
                      orderBy ===
                      "symbol"
                    }

                    direction={order}

                    onClick={() =>
                      handleSort(
                        "symbol"
                      )
                    }
                  >

                    Stock

                  </TableSortLabel>

                  <Tooltip title="Stock Symbol">

                    <InfoIcon
                      style={{
                        fontSize:
                          "16px",

                        color:
                          "gray",
                      }}
                    />

                  </Tooltip>

                </div>

              </TableCell>

              {/* LTP */}
              <TableCell
                style={{
                  backgroundColor:
                    darkMode
                      ? "#2c2c2c"
                      : "white",

                  color:
                    darkMode
                      ? "white"
                      : "black",

                  fontWeight: "bold",
                }}
              >

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >

                  <TableSortLabel
                    active={
                      orderBy ===
                      "ltp"
                    }

                    direction={order}

                    onClick={() =>
                      handleSort(
                        "ltp"
                      )
                    }
                  >

                    LTP

                  </TableSortLabel>

                  <Tooltip title="Last Traded Price">

                    <InfoIcon
                      style={{
                        fontSize:
                          "16px",

                        color:
                          "gray",
                      }}
                    />

                  </Tooltip>

                </div>

              </TableCell>

              {/* OPEN */}
              <TableCell
                style={{
                  backgroundColor:
                    darkMode
                      ? "#2c2c2c"
                      : "white",

                  color:
                    darkMode
                      ? "white"
                      : "black",
                }}
              >

                Open

              </TableCell>

              {/* HIGH */}
              <TableCell
                style={{
                  backgroundColor:
                    darkMode
                      ? "#2c2c2c"
                      : "white",

                  color:
                    darkMode
                      ? "white"
                      : "black",
                }}
              >

                High

              </TableCell>

              {/* LOW */}
              <TableCell
                style={{
                  backgroundColor:
                    darkMode
                      ? "#2c2c2c"
                      : "white",

                  color:
                    darkMode
                      ? "white"
                      : "black",
                }}
              >

                Low

              </TableCell>

              {/* PIVOT */}
              <TableCell
                style={{
                  backgroundColor:
                    darkMode
                      ? "#2c2c2c"
                      : "white",

                  color:
                    darkMode
                      ? "white"
                      : "black",
                }}
              >

                Pivot Range

              </TableCell>

              {/* RANGE */}
              <TableCell
                style={{
                  backgroundColor:
                    darkMode
                      ? "#2c2c2c"
                      : "white",

                  color:
                    darkMode
                      ? "white"
                      : "black",
                }}
              >

                Today's Range

              </TableCell>

              {/* SCAN */}
              <TableCell
                style={{
                  backgroundColor:
                    darkMode
                      ? "#2c2c2c"
                      : "white",

                  color:
                    darkMode
                      ? "white"
                      : "black",
                }}
              >

                Scans

              </TableCell>

            </TableRow>

          </TableHead>

          {/* BODY */}
          <TableBody>

            {paginatedData.map(
              (
                stock,
                index
              ) => (

                <TableRow
                  key={index}

                  hover

                  onClick={() =>
                    navigate(
                      `/stock/${stock.symbol}`
                    )
                  }

                  style={{
                    cursor:
                      "pointer",

                    backgroundColor:
                      darkMode
                        ? "#1e1e1e"
                        : "white",
                  }}
                >

                  {/* STOCK */}
                  <TableCell
                    style={{
                      color:
                        darkMode
                          ? "white"
                          : "black",
                    }}
                  >

                    <div
                      style={{
                        display:
                          "flex",

                        alignItems:
                          "center",

                        gap: "10px",
                      }}
                    >

                      <Avatar
                        style={{
                          background:
                            "#1976d2",
                        }}
                      >

                        {stock.symbol?.charAt(
                          0
                        )}

                      </Avatar>

                      {
                        stock.symbol
                      }

                    </div>

                  </TableCell>

                  {/* LTP */}
                  <TableCell>

                    <span
                      style={{
                        color:
                          stock.pctChange >
                          0
                            ? "lime"
                            : "red",

                        fontWeight:
                          "bold",
                      }}
                    >

                      {stock.ltp}

                    </span>

                  </TableCell>

                  {/* OPEN */}
                  <TableCell
                    style={{
                      color:
                        darkMode
                          ? "white"
                          : "black",
                    }}
                  >

                    {stock.open}

                  </TableCell>

                  {/* HIGH */}
                  <TableCell
                    style={{
                      color:
                        darkMode
                          ? "white"
                          : "black",
                    }}
                  >

                    {stock.high}

                  </TableCell>

                  {/* LOW */}
                  <TableCell
                    style={{
                      color:
                        darkMode
                          ? "white"
                          : "black",
                    }}
                  >

                    {stock.low}

                  </TableCell>

                  {/* PIVOT */}
                  <TableCell>

                    <PivotRange
                      stock={stock}
                    />

                  </TableCell>

                  {/* RANGE */}
                  <TableCell>

                    <RangeBar
                      low={stock.low}
                      high={stock.high}
                      ltp={stock.ltp}
                    />

                  </TableCell>

                  {/* BADGE */}
                  <TableCell>

                    <Chip
                      label="Open High"
                      color="primary"
                    />

                  </TableCell>

                </TableRow>
              )
            )}

          </TableBody>

        </Table>

      </TableContainer>

      {/* PAGINATION */}
      <TablePagination

        component="div"

        count={stocks.length}

        page={page}

        rowsPerPage={
          rowsPerPage
        }

        onPageChange={(
          event,
          newPage
        ) => {

          setPage(newPage);
        }}

        onRowsPerPageChange={(
          event
        ) => {

          setRowsPerPage(
            parseInt(
              event.target.value,
              10
            )
          );

          setPage(0);
        }}

        style={{
          backgroundColor:
            darkMode
              ? "#1e1e1e"
              : "white",

          color:
            darkMode
              ? "white"
              : "black",
        }}
      />

    </Paper>
  );
}

export default StockTable;