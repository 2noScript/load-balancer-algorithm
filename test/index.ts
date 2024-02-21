import express from "express";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  setTimeout(next, 5000);
});

app.get("/", (req, res) => {
  res.send("logic handle successfully");
});
app.listen(port, () => {
  console.log(`server test at http://localhost:${port}`);
});
