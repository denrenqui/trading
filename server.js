const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/binance", async (req, res) => {
  try {
    const response = await axios.get("https://fapi.binance.com/fapi/v1/klines?symbol=TIAUSDT&interval=15m&limit=50");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
