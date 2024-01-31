import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});
app.listen(port, () => {
  console.log(`load balancer at http://localhost:${port}`);
});
