const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const api = require("./routes/api");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:8001", "http://localhost"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);
app.use("/api", api);

server = app.listen(port, "0.0.0.0", () => {
  console.log(`Listening on ${port}`);
});
