import express from "express";


const app = express();


const port = 3000;

app.get("/api/test", (req, res) => {
  res.send("api is working fine");
});

app.get("/api/health", (req, res) => {
  res.send("Health is ok");
});

app.get("/api/health", (req, res) => {
  res.send("Health is ok");
});



app.listen(port, () => {
  console.log("my port is listening");
});
