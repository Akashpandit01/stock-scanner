# 📈 Stock Scanner Dashboard

A modern Stock Scanner Dashboard built using React.js, Material UI, Context API, and Highcharts.

This application displays stock scanner data in a sortable and paginated table with dark/light theme support and interactive charts.

---

# 🚀 Features

✅ Stock Scanner Table  
✅ Sorting Functionality  
✅ Pagination  
✅ Tooltips  
✅ Dark / Light Mode  
✅ Context API  
✅ React Router Navigation  
✅ Stock Details Page  
✅ Interactive Charts  
✅ Area / Line / Bar Chart Toggle  
✅ Responsive UI  
✅ API Integration  
✅ Reusable Components  
✅ Fallback Handling for API Failures

---

# 🛠️ Tech Stack

- React.js
- React Router DOM
- Material UI
- Context API
- Highcharts
- Axios
- JavaScript
- CSS

---

# 📂 Folder Structure

```bash
src
│
├── api
│   └── stockApi.js
│
├── components
│   ├── InfoCard.jsx
│   ├── PivotRange.jsx
│   ├── RangeBar.jsx
│   ├── StockChart.jsx
│   └── StockTable.jsx
│
├── context
│   └── ThemeContext.jsx
│
├── pages
│   ├── ScannerPage.jsx
│   └── StockDetails.jsx
│
├── App.jsx
└── main.jsx
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

---

## 2. Open Project

```bash
cd stock-scanner
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Start Project

```bash
npm run dev
```

---

# 🌐 APIs Used

## Scanner API

```bash
https://intradayscreener.com/api/openhighlow/cash
```

## Quotes API

```bash
https://intradayscreener.com/api/allQuotesCompact
```

## Stock Snapshot API

```bash
https://intradayscreener.com/api/TechnicalAnaysis/stocksnapshot/{symbol}
```

---

# 🎨 Dark Mode

Dark mode is implemented using React Context API for global state management.

---

# 📊 Charts

Interactive stock charts are created using Highcharts.

Supported chart types:

- Area Chart
- Line Chart
- Bar Chart

---

# 🧠 Concepts Used

- useState
- useEffect
- useContext
- Context API
- React Router
- Conditional Rendering
- API Handling
- Reusable Components
- Pagination
- Sorting
- Dynamic Styling

---

# ⚠️ API Handling

Some APIs occasionally return null or empty data.

Fallback handling was implemented to prevent UI crashes and improve user experience.

---

# 📱 Responsive Design

The application is responsive and works across desktop and mobile devices.

---

# 🚀 Deployment

Deployed using Vercel.

---

# 👨‍💻 Author

Akash Pandit


