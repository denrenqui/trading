const express = require("express");
const axios = require("axios");
const app = express();

app.get("/binance", async (req, res) => {
  try {
    const response = await axios.get("https://fapi.binance.com/fapi/v1/klines?symbol=TIAUSDT&interval=15m&limit=50");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
